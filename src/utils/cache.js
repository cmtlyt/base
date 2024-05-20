import { EMPTY } from './constant';

/**
 * @template R
 * @param {()=>R} cacheLoad
 * @returns {R}
 */
export const cacheByReturn = (() => {
  if (Reflect?.apply) {
    return (cacheLoad) => {
      let cache = EMPTY;
      return (...args) => {
        if (cache === EMPTY) cache = cacheLoad();
        if (typeof cache !== 'function') return cache;
        return Reflect.apply(cache, this, args);
      };
    };
  }
  return (cacheLoad) => {
    let cache = EMPTY;
    return function (...args) {
      if (cache === EMPTY) cache = cacheLoad();
      if (typeof cache !== 'function') return cache;
      return cache.apply(this, args);
    };
  };
})();

class MemoizeMap {
  #_map = new Map();
  #_weakMap = new WeakMap();

  #_isObject(key) {
    return typeof key === 'object' && key !== null;
  }

  set(key, value) {
    if (this.#_isObject(key)) {
      this.#_weakMap.set(key, value);
    } else {
      this.#_map.set(key, value);
    }
  }
  get(key) {
    if (this.#_isObject(key)) {
      return this.#_weakMap.get(key);
    }
    return this.#_map.get(key);
  }
  has(key) {
    if (this.#_isObject(key)) {
      return this.#_weakMap.has(key);
    }
    return this.#_map.has(key);
  }
}

/**
 * @param {(...args:any[])=>any} func
 * @param {(...args:any[])=>any} resolver
 * @returns {(...args:any[])=>any}
 */
export function memoize(func, resolver) {
  const memoized = function (...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = new MemoizeMap();
  return memoized;
}
