import { isNull } from './verify';

/**
 * @param {any} value
 * @returns {any[]}
 */
export function getArray(value) {
  if (isNull(value)) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * @template {any[]} T
 * @param {T} array
 * @param {number} size
 * @returns {T[]}
 */
export function getArraySlice(array, size = 0) {
  if (size <= 0) return array;
  return array.reduce((acc, cur, index) => {
    if (index % size === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(cur);
    return acc;
  }, []);
}
