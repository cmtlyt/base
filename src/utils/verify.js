import { EMPTY } from './constant';

/**
 * @param {any} value
 * @returns {boolean}
 */
export function isNull(value) {
  return (
    typeof value === 'undefined' ||
    (typeof value === 'object' && value === null)
  );
}

/**
 * @param {any} value
 * @returns {boolean}
 */
export function isNaN(value) {
  return typeof value === 'number' && value !== value;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Promise A+
 * @param {any} value
 * @returns {boolean}
 */
export function isPromise(value) {
  return value && typeof value.then === 'function';
}

/**
 * @param {any} value
 * @returns {string}
 */
export function getType(value) {
  const baseType = typeof value;
  if (baseType !== 'object') return baseType;
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * @param {any} value
 * @returns {boolean}
 */
export function isEmpty(value) {
  if (value === EMPTY) return true;
  if (typeof value === 'boolean') return false;
  if (typeof value === 'number') return isNaN(value) || false;
  if (typeof value === 'object') {
    const type = getType(value);
    if (['set', 'map'].includes(type)) return value.size === 0;
    if (['weakmap', 'weakset'].includes(type)) return false;
    return Object.keys(value).length === 0;
  }
  return isNull(value) || !value;
}
