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
