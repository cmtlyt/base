import { EMPTY } from './constant';

/**
 * @param {()=>R} cacheLoad
 * @returns {R}
 */
export function cacheByReturn(cacheLoad) {
  let cache = EMPTY;
  return function (...args) {
    if (cache === EMPTY) cache = cacheLoad();
    if (typeof cache !== 'function') return cache;
    return cache.apply(this, args);
  };
}
