import { warning } from '../warning';
import { getType } from './verify';

/**
 * @template T
 * @param {T} obj
 * @param {WeakMap} hash
 * @returns {T}
 */
export function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (hash.has(obj)) return hash.get(obj);

  /** @type {*} */
  const newObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, newObj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], hash);
    }
  }
  return newObj;
}

/**
 * @template {string|number|any[]|Record<string, any>} T
 * @param {T} target
 * @param {*} source
 * @returns {T}
 */
function _merge(target, source) {
  if (getType(target) !== getType(source)) {
    warning('传入的两个参数类型不同,无法合并');
    return target;
  }
  if (typeof target === 'string' || typeof target === 'number')
    return target + source;
  // @ts-ignore
  if (Array.isArray(target)) return target.concat(source);
  if (typeof target === 'object' && target !== null) {
    for (const key in source) {
      const item = source[key];
      let current = item;
      if (typeof item === 'object' && item !== null) {
        current = target[key] || Array.isArray(item) ? [] : {};
        current = _merge(current, item);
      }
      target[key] = current;
    }
  }
  return target;
}

/**
 * @template {string|number|any[]|Record<string, any>} T
 * @param {T} target
 * @param {*} source
 * @returns {T}
 */
export function merge(target, ...source) {
  return source.reduce((acc, cur) => _merge(acc, cur), target);
}

/**
 * @template {string|number|any[]|Record<string, any>} T
 * @param {T} target
 * @param {*} source
 * @returns {T}
 */
export function cloneMerge(target, ...source) {
  target = deepClone(target);
  return merge(target, ...source);
}
