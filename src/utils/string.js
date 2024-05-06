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

/**
 * @typedef {{
 *  duration?: number;
 *  expires?: string | Date;
 *  domain?: string;
 * }} CookieOptions
 * @param {CookieOptions} options
 * @returns {string}
 */
export function generateCookieInfo(options = {}) {
  const { duration, expires, domain } = options;
  let infoString = '';
  if (!duration && !expires && !domain) return infoString;
  if (duration) {
    const date = new Date();
    date.setTime(date.getTime() + duration);
    infoString += `expires=${date.toUTCString()};`;
  } else if (expires) {
    if (typeof expires === 'string') {
      infoString += `expires=${expires};`;
    } else if (expires instanceof Date) {
      infoString += `expires=${expires.toUTCString()};`;
    } else {
      throw new TypeError('expires 必须是字符串或 Date (推荐使用Date)');
    }
  }
  if (domain) {
    infoString += `domain=${domain};`;
  }
  return infoString;
}

/**
 * @param  {(string|string[]|Record<string, boolean>)[]} args
 * @returns {string}
 */
export function generateClassName(...args) {
  if (!args.length) return '';
  const className = args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      } else if (Array.isArray(arg)) {
        return generateClassName(...arg);
      } else if (typeof arg === 'object') {
        return Object.keys(arg)
          .filter((key) => arg[key])
          .join(' ');
      } else {
        return '';
      }
    })
    .join(' ');
  return className;
}

/**
 * @alias generateClassName
 */
export const gc = generateClassName;
