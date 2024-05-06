import { generateCookieInfo } from '../utils/string';

/**
 * @typedef {{
 *  duration?: number;
 *  expires?: string | Date;
 *  domain?: string;
 * }} CookieOptions
 */

/**
 * @type {{
 *  get: (key: string) => string;
 *  set: (key: string, value: string, options?: CookieOptions) => void;
 *  remove: (key: string) => void;
 * }}
 */
export const cookie = {
  get(key) {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      .split('=')[1];
  },
  set(key, value, options = {}) {
    document.cookie = `${key}=${value};${generateCookieInfo(options)}`;
  },
  remove(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  },
};
