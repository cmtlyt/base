import { getRandomString } from '../utils/string';
import { EMPTY } from '../utils/constant';

/**
 * @typedef {{
 *  data:any;
 *  __id:string;
 * }} PoolItem
 * @typedef {{data:()=>any, unUse:()=>void}} StoreItem
 * @typedef {{
 *  resolve: (item: StoreItem)=>void;
 *  reject: (reason?: any) => void;
 * }} WaitingItem
 */

/** @type {Record<string|symbol, Pool>} */
const poolMap = {};

class Pool {
  /**
   * @param {string|symbol} poolId
   * @param {number} size
   * @param {()=>any} initFunction
   * @returns {Pool}
   */
  static getPool(poolId = '', size = 5, initFunction = () => EMPTY) {
    if (!poolId) return new Pool(size, initFunction);
    return (poolMap[poolId] ??= new Pool(size, initFunction));
  }

  #_poolId;
  /** @type {PoolItem[]} */
  #_pool;
  /** @type {WaitingItem[]} */
  #_waiting;
  /** @type {(data:any)=>void} */
  #_closeCallback;

  /**
   * @param {number} size
   * @param {(idx:number)=>any} initFunction
   * @param {string|symbol} poolId
   */
  constructor(size = 5, initFunction = () => EMPTY, poolId = Symbol()) {
    this.#_poolId = poolId;
    this.#_pool = Array.from({ length: size }, (_, i) =>
      this.#_genItem(initFunction(i))
    );
    this.#_waiting = [];
    this.usableCount = this.#_pool.reduce((prev, cur) => {
      if (cur.data !== EMPTY) prev++;
      return prev;
    }, 0);
    this.isClose = false;
    this.#_closeCallback = () => {};
  }

  /**
   * @param {any} data
   * @returns
   */
  #_genItem(data) {
    return { data, __id: getRandomString(32) };
  }
  /**
   * @param {any} data
   * @param {number} index
   */
  #_putItem(data, index = null) {
    if (this.isClose) {
      this.#_closeCallback(data);
      throw new Error('池子已关闭');
    }
    // 返还
    if (typeof index === 'number') {
      const item = this.#_pool[index];
      item.data = data;
      item.__id = getRandomString(32);
    } else {
      // 添加
      const index = this.#_pool.findIndex((item) => item.data === EMPTY);
      if (!~index) throw new Error('池子已满');
      this.#_pool[index] = this.#_genItem(data);
    }
    ++this.usableCount;
  }
  /**
   * @param {number} index
   * @returns {Promise<StoreItem>}
   */
  async #_genReturn(index) {
    if (this.isClose) throw new Error('池子已关闭');
    const item = this.#_pool[index];
    // 如果不存在，则等待
    if (!item || item.data === EMPTY) {
      return new Promise((resolve, reject) => {
        this.#_waiting.push({ resolve, reject });
      });
    }
    const { data, __id } = item;

    const canIUse = () => {
      if (this.isClose) {
        this.#_putItem(data, index);
        throw new Error('池子已关闭');
      }
      if (__id !== item.__id) throw new Error('数据已被返还');
    };
    const unUse = () => {
      this.#_putItem(data, index);
    };

    --this.usableCount;

    const dataHandler = function () {
      if (this !== itemHandler) return;
      canIUse();
      return data;
    };

    const unUseHandler = function () {
      if (this !== itemHandler) return;
      canIUse();
      return unUse();
    };

    const itemHandler = {
      data() {
        return dataHandler.call(this);
      },
      unUse() {
        return unUseHandler.call(this);
      },
    };

    return Promise.resolve(itemHandler);
  }

  /**
   * @param {*} data
   */
  put(data) {
    this.#_putItem(data);
    // 如果存在等待队列，则取出第一个
    if (this.#_waiting.length) {
      const { resolve } = this.#_waiting.shift();
      this.get().then((item) => {
        resolve(item);
      });
    }
  }
  async get() {
    const index = this.#_pool.findIndex((item) => item.data !== EMPTY);
    return this.#_genReturn(index);
  }
  /**
   * @param {(data:any)=>any} callback
   */
  close(callback) {
    this.#_pool.forEach(({ data }) => callback(data));
    this.#_pool = [];
    this.#_waiting = [];
    this.usableCount = 0;
    this.isClose = true;
    this.#_closeCallback = callback;
    delete poolMap[this.#_poolId];
  }
}

/**
 * @param {()=>any} initFunction
 * @param {number} size
 * @returns {Pool}
 */
export function createPool(initFunction, size = 5) {
  return Pool.getPool(null, size, initFunction);
}

/**
 * @param {string} poolId
 * @returns {Pool}
 */
export function getPool(poolId = '') {
  return Pool.getPool(poolId);
}
