import { cacheByReturn } from './cache';
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

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isFile = cacheByReturn(() => {
  if (!File) return false;
  if (File.prototype.isPrototypeOf) {
    return (value) => File.prototype.isPrototypeOf(value);
  }
  return (value) => value instanceof File;
});

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isBlob = cacheByReturn(() => {
  if (!Blob) return false;
  if (Blob.prototype.isPrototypeOf) {
    return (value) => Blob.prototype.isPrototypeOf(value);
  }
  return (value) => value instanceof Blob;
});

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isHttpUrlString(value) {
  return (
    typeof value === 'string' &&
    (/^https?:\/\//.test(value) || /^\/\//.test(value))
  );
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isBlobUrlString(value) {
  return typeof value === 'string' && /^blob:/.test(value);
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isDataUrlString(value) {
  return typeof value === 'string' && /^data:/.test(value);
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isUrl(value) {
  return (
    value instanceof URL ||
    isHttpUrlString(value) ||
    isBlobUrlString(value) ||
    isDataUrlString(value)
  );
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isTrue(value) {
  return value === true || String(value).toLowerCase() === 'true';
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isFalse(value) {
  return value === false || String(value).toLowerCase() === 'false';
}
