import { cacheByReturn } from './cache';

/**
 * @template {(...args:any[])=>void} T
 * @param {T} func
 * @param {number} time
 * @param {boolean} immediately
 * @returns {T}
 */
export function debounce(func, time = 1000, immediately = false) {
  if (time <= 0) return func;
  let timer = null;
  // @ts-ignore
  return cacheByReturn(() => {
    if (immediately) {
      return (...args) => {
        if (timer) clearTimeout(timer);
        else func.apply(this, args);
        timer = setTimeout(() => {
          timer = null;
        }, time);
      };
    }
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, time);
    };
  });
}

/**
 * @template {(...args:any)=>any} T
 * @param {T} func
 * @param {number} time
 * @param {boolean} immediately
 * @returns {T}
 */
export function throttle(func, time = 100, immediately = true) {
  if (time <= 0) return func;
  let timer = null;
  // @ts-ignore
  return cacheByReturn(() => {
    if (immediately) {
      return (...args) => {
        if (timer) return;
        func.apply(null, args);
        timer = setTimeout(() => {
          timer = null;
        }, time);
      };
    }
    return (...args) => {
      if (timer) return;
      timer = setTimeout(() => {
        func.apply(null, args);
        timer = null;
      }, time);
    };
  });
}
