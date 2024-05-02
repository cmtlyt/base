/**
 * @param {number} len
 * @returns {string}
 */
export function getRandomString(len = 8) {
  const str = Math.random()
    .toString(32)
    .slice(2, len + 2);
  if (str.length === len) {
    return str;
  }
  return str + getRandomString(len - str.length);
}

/**
 * @param {string} resource
 * @returns {URL}
 */
export function createLinkByString(resource) {
  const blob = new Blob([resource]);
  const url = URL.createObjectURL(blob);
  return url;
}
