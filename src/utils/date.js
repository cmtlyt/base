/**
 * @param {Date} date
 * @param {string|null} format
 * @returns {string}
 */
export function formatDate(date = new Date(), format) {
  if (!format) return date.valueOf();
  // todo format
  return date.toLocaleString();
}
