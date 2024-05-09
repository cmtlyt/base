import { getRandomString } from '../utils';
import { EMPTY } from '../utils/constant';

/**
 * @typedef {{
 *  data:any;
 *  __id:string;
 * }} PoolItem
 * @typedef {{
 *  resolve: (item: {data:any, unUse:()=>void})=>void;
 *  reject: (reason?: any) => void;
 * }} WaitingItem
 */

class Pool {
  /** @type {Record<string|symbol, Pool>} */
  static poolMap = {};

  /**
   * @param {string|symbol} poolId
   * @param {number} size
   * @param {()=>any} initFunction
   * @returns {Pool}
   */
  static getPool(poolId = '', size = 5, initFunction = () => EMPTY) {
    if (!poolId) return new Pool(size, initFunction);
    return (Pool.poolMap[poolId] ??= new Pool(size, initFunction));
  }

  /**
   * @param {number} size
   * @param {()=>any} initFunction
   * @param {string|symbol} poolId
   */
  constructor(size = 5, initFunction = () => EMPTY, poolId = Symbol()) {
    this._poolId = poolId;
    /** @type {PoolItem[]} */
    this._pool = Array.from({ length: size }, () =>
      this._genItem(initFunction())
    );
    /** @type {WaitingItem[]} */
    this._waiting = [];
    this.usableCount = this._pool.reduce((prev, cur) => {
      if (cur.data !== EMPTY) prev++;
      return prev;
    }, 0);
    this.isClose = false;
    /** @type {(data:any)=>void} */
    this._closeCallback = () => {};
  }

  /**
   * @param {any} data
   * @returns
   */
  _genItem(data) {
    return { data, __id: getRandomString(32) };
  }
  /**
   * @param {any} data
   * @param {number} index
   */
  _putItem(data, index = null) {
    if (this.isClose) {
      this._closeCallback(data);
      throw new Error('池子已关闭');
    }
    // 返还
    if (typeof index === 'number') {
      const item = this._pool[index];
      item.data = data;
      item.__id = getRandomString(32);
    } else {
      // 添加
      const index = this._pool.findIndex((item) => item.data === EMPTY);
      if (!~index) throw new Error('池子已满');
      this._pool[index] = this._genItem(data);
    }
    ++this.usableCount;
  }
  /**
   * @param {number} index
   * @returns {Promise<{data:any, unUse:()=>void}>}
   */
  async _genReturn(index) {
    if (this.isClose) throw new Error('池子已关闭');
    const item = this._pool[index];
    // 如果不存在，则等待
    if (!item || item.data === EMPTY) {
      return new Promise((resolve, reject) => {
        this._waiting.push({ resolve, reject });
      });
    }
    const { data, __id } = item;

    const canIUse = () => {
      if (this.isClose) {
        this._putItem(data, index);
        throw new Error('池子已关闭');
      }
      if (__id !== item.__id) throw new Error('数据已被返还');
    };
    const unUse = () => {
      canIUse();
      this._putItem(data, index);
    };

    --this.usableCount;

    return Promise.resolve({
      get data() {
        canIUse();
        return data;
      },
      get unUse() {
        canIUse();
        return unUse;
      },
    });
  }

  /**
   * @param {*} data
   */
  put(data) {
    this._putItem(data);
    // 如果存在等待队列，则取出第一个
    if (this._waiting.length) {
      const { resolve } = this._waiting.shift();
      this.get().then((item) => {
        resolve(item);
      });
    }
  }
  async get() {
    const index = this._pool.findIndex((item) => item.data !== EMPTY);
    return this._genReturn(index);
  }
  /**
   * @param {(data:any)=>any} callback
   */
  close(callback) {
    this._pool.forEach(({ data }) => callback(data));
    this._pool = [];
    this._waiting = [];
    this.usableCount = 0;
    this.isClose = true;
    this._closeCallback = callback;
    Pool.poolMap[this._poolId] = null;
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
