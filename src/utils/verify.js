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
