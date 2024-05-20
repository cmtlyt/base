import { warning } from '../warning';
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
  if (baseType !== 'object' && baseType !== 'function') return baseType;
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
  warning('只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险');
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
  warning('只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险');
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
export function isHttpsUrlString(value) {
  if (/^\/\//.test(value)) value = new URL(value).href;
  return typeof value === 'string' && /^https:\/\//.test(value);
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
  warning('只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险');
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

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isAsyncFunc(value) {
  warning(
    '该方法存在生产环境和开发环境结果不一致风险, 请谨慎使用, 例如使用 babel 转换后 async 函数会变成普通函数'
  );
  return getType(value) === 'asyncfunction';
}
