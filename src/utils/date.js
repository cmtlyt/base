import { cacheByReturn } from './cache';

/**
 * @param {Date} date
 * @param {string|null} format
 * @returns {string}
 */
export function formatDate(date = new Date(), format) {
  console.warn('未来会实现~');
  if (!format) return date.valueOf() + '';
  // todo format
  return date.toLocaleString();
}

/**
 * @returns {()=>number}
 */
export const getNow = cacheByReturn(() => {
  if (typeof performance !== 'undefined') {
    return () => performance.now();
  }
  return () => Date.now();
});
