import { isEmpty } from './verify';

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
 * @returns {string}
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
 *  maxAge?: number;
 *  path?: string;
 * }} CookieOptions
 * @param {CookieOptions} options
 * @returns {string}
 */
export function generateCookieInfo(options = {}) {
  const { duration, expires, domain, maxAge, path } = options;
  let infoString = '';
  if (isEmpty(options)) return infoString;
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
  if (maxAge) {
    infoString += `max-age=${maxAge};`;
  }
  if (path) {
    infoString += `path=${path};`;
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

/**
 * @param {string} str
 * @param {string|RegExp} pattern
 * @param {(matchString:string, ...args:string[])=>string|Promise<string>} replacer
 * @returns {Promise<string>}
 */
function _replaceOne(str, pattern, replacer) {
  return new Promise(async (resolve, reject) => {
    try {
      pattern = new RegExp(pattern);
      const match = str.match(pattern);
      if (!match) {
        resolve(str);
        return;
      }
      const repStr = await replacer.apply(null, match);
      resolve(str.replace(pattern, repStr));
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * @param {string} str
 * @param {string|RegExp} pattern
 * @param {((matchString:string, ...args:string[])=>string|Promise<string>)|string} replacer
 * @returns {Promise<string>}
 */
export async function asyncReplace(str, pattern, replacer) {
  if (typeof replacer === 'string') return str.replace(pattern, replacer);
  if (typeof replacer !== 'function') {
    throw new TypeError('replacer 必须是字符串或函数');
  }
  if (typeof pattern === 'string') {
    return _replaceOne(str, pattern, replacer);
  }
  if (pattern instanceof RegExp) {
    if (!pattern.global) {
      return _replaceOne(str, pattern, replacer);
    }
    return new Promise(async (resolve, reject) => {
      try {
        let match;
        let lastIndex = 0;
        const proms = [];
        while ((match = pattern.exec(str)) !== null) {
          const prom = replacer.apply(null, Array.from(match));
          const midStr = str.slice(lastIndex, match.index);
          lastIndex = match.index + match[0].length;
          proms.push(prom, midStr);
        }
        const lastStr = str.slice(lastIndex);
        proms.push(lastStr);
        const temp = await Promise.all(proms);
        resolve(temp.join(''));
      } catch (e) {
        reject(e);
      }
    });
  }
  throw new TypeError('pattern 必须是字符串或正则表达式');
}
