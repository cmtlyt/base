import { EMPTY } from './constant';

/**
 * @template R
 * @param {()=>R} cacheLoad
 * @returns {R}
 */
export function cacheByReturn(cacheLoad) {
  let cache = EMPTY;
  // @ts-ignore
  return function (...args) {
    if (cache === EMPTY) cache = cacheLoad();
    if (typeof cache !== 'function') return cache;
    return cache.apply(this, args);
  };
}
