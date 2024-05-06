import { isNull } from "./verify";

/**
 * @param {any} value
 * @returns {any[]}
 */
export function getArray(value) {
  if (isNull(value)) return [];
  return Array.isArray(value) ? value : [value];
}
