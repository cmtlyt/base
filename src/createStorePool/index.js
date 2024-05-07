import { EventEmitter } from '../eventEmitter';
import { EMPTY } from '../utils/constant';

export class DefaultStoreController {
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new DefaultStoreController();
    }
    return this.instance;
  }

  constructor() {
    this.pool = [];
    this.itemTotal = 0;
  }

  getId() {
    if (this.itemTotal < this.pool.length) {
      return this.pool.findIndex((item) => item === EMPTY);
    }
    return this.itemTotal;
  }
  save(data) {
    const id = this.getId();
    this.pool[id] = data;
    ++this.itemTotal;
    return id;
  }
  get(id) {
    if (typeof id !== 'number') return null;
    return this.pool[id] ?? null;
  }
  delete(id) {
    if (this.pool[id] !== EMPTY) {
      --this.itemTotal;
      this.pool[id] = EMPTY;
    }
  }
  clear() {
    for (let i = 0; i < this.itemTotal; ++i) {
      this.pool[i] = EMPTY;
    }
    this.itemTotal = 0;
  }
  pop(id) {
    const data = this.get(id);
    this.delete(id);
    return data;
  }
}

/**
 * @typedef {{
 *  save: (value: any) => number,
 *  get: (id: number) => any,
 *  delete: (id: number) => void,
 *  clear: () => void,
 *  pop: (id: number) => any,
 *  on: (type: string, listener: Function) => Function,
 *  off: (type: string, listener: Function) => void,
 *  once: (type: string, listener: Function) => Function,
 *  clearEvent: (type: string) => void,
 *  clearEvents: () => void,
 * }} StorePool
 */

/**
 * @param {DefaultStoreController} controller
 * @returns {StorePool}
 */
export function createStorePool(controller = null) {
  controller = controller || DefaultStoreController.getInstance();
  const emitter = new EventEmitter();

  const _save = (value) => {
    const id = controller.save(value);
    emitter.emit('save', { id, value });
    return id;
  };

  const _get = (id) => {
    const data = controller.get(id);
    emitter.emit('get', { id, data });
    return data;
  };

  const _clear = () => {
    controller.clear();
    emitter.emit('clear');
  };

  const _delete = (id) => {
    controller.delete(id);
    emitter.emit('delete', { id });
  };

  const _pop = (id) => {
    const data = controller.pop(id);
    emitter.emit('pop', { id, data });
    return data;
  };

  const _on = (type, listener) => {
    emitter.on(type, listener);
    return () => {
      emitter.off(type, listener);
    };
  };

  const _off = (type, listener) => {
    emitter.off(type, listener);
  };

  const _once = (type, listener) => {
    emitter.once(type, listener);
    return () => {
      emitter.off(type, listener);
    };
  };

  const _clearEvents = () => {
    emitter.clearAll();
  };

  const _clearEvent = (type) => {
    emitter.clear(type);
  };

  return {
    save: _save,
    get: _get,
    delete: _delete,
    clear: _clear,
    pop: _pop,
    on: _on,
    off: _off,
    once: _once,
    clearEvent: _clearEvent,
    clearEvents: _clearEvents,
  };
}
