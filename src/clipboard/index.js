import { isHttpsUrlString } from '../utils';
import { cacheByReturn } from '../utils/cache';
import { warning } from '../warning';

/**
 * @returns {boolean}
 */
const hasCopyCommand = cacheByReturn(() => {
  return document.queryCommandSupported?.('copy');
});

/**
 * @returns {boolean}
 */
const hasPasteCommand = cacheByReturn(() => {
  return document.queryCommandSupported?.('paste');
});

/**
 * @returns {boolean}
 */
const isCopyable = cacheByReturn(() => {
  return (
    isHttpsUrlString() &&
    (!!navigator.clipboard?.writeText || hasCopyCommand() || false)
  );
});

/**
 * @returns {boolean}
 */
const isPasteable = cacheByReturn(() => {
  return (
    isHttpsUrlString() &&
    (!!navigator.clipboard?.readText || hasPasteCommand() || false)
  );
});

/**
 * @returns {boolean}
 */
const isClearable = isCopyable;

/**
 * @param {string} text
 * @returns {void}
 */
const copy = cacheByReturn(() => {
  if (isCopyable()) {
    return (text) => {
      navigator.clipboard.writeText(text);
    };
  } else if (hasCopyCommand()) {
    return (text) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  return (text) => {
    warning('copy not supported:> ', text);
  };
});

/**
 * @returns {Promise<string>}
 */
const paste = cacheByReturn(() => {
  if (isPasteable()) {
    return () => {
      return navigator.clipboard.readText();
    };
  } else if (hasPasteCommand()) {
    return () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.select();
      document.execCommand('paste');
      const text = input.value;
      document.body.removeChild(input);
      return Promise.resolve(text);
    };
  }
  return () => {
    warning('paste not supported');
    return Promise.reject('paste not supported');
  };
});

/**
 * @returns {void}
 */
const clear = cacheByReturn(() => {
  if (isClearable()) {
    return () => {
      navigator.clipboard.writeText('');
    };
  } else if (hasCopyCommand()) {
    return () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  return () => {
    warning('clear not supported');
  };
});

export const clipboard = {
  copy,
  paste,
  clear,
  get isCopyable() {
    return isCopyable();
  },
  get isPasteable() {
    return isPasteable();
  },
  get isClearable() {
    return isClearable();
  },
};
