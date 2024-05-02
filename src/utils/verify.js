/**
 * @param {any} value
 * @returns {boolean}
 */
export function isNull(value) {
  return (
    typeof value === "undefined" ||
    (typeof value === "object" && value === null)
  );
}
