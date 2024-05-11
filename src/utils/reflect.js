import { cacheByReturn } from './cache';

/**
 * @template T
 * @param {(...args:any[])=>T} target
 * @param {any} thisArg
 * @param {any[]} argumentsList
 * @returns {T}
 */
export const apply = cacheByReturn(() => {
  if (Reflect?.apply) {
    return Reflect.apply;
  }
  return (target, thisArg, argumentsList) => {
    return target.apply(thisArg, argumentsList);
  };
});

/**
 * @template T
 * @param {new (...args:any[])=>T} target
 * @param {any[]} argumentsList
 * @param {any} newTarget
 * @returns {T}
 */
export const construct = cacheByReturn(() => {
  if (Reflect?.construct) {
    return Reflect.construct;
  }
  return (target, argumentsList, newTarget) => {
    return new target(...argumentsList);
  };
});

/**
 * @template {object} T
 * @param {T} target
 * @param {keyof T} propertyKey
 * @param {PropertyDescriptor & ThisType<T[keyof T]>} attributes
 * @returns {boolean}
 */
export const defineProperty = cacheByReturn(() => {
  if (Reflect?.defineProperty) {
    return Reflect.defineProperty;
  }
  if (Object.defineProperty) {
    return Object.defineProperty;
  }
  return (target, propertyKey, attributes) => {
    target[propertyKey] = attributes.value;
    return true;
  };
});

/**
 * @template {object} T
 * @param {T} target
 * @param {keyof T} propertyKey
 * @returns {boolean}
 */
export const deleteProperty = cacheByReturn(() => {
  if (Reflect?.deleteProperty) {
    return Reflect.deleteProperty;
  }
  if (Object.defineProperty) {
    return Object.defineProperty;
  }
  return (target, propertyKey) => {
    delete target[propertyKey];
    return true;
  };
});

/**
 * @template T
 * @param {T} target
 * @param {keyof T} propertyKey
 * @param {any} receiver
 * @returns {T[keyof T]}
 */
export const get = cacheByReturn(() => {
  if (Reflect?.get) {
    return Reflect.get;
  }
  return (target, propertyKey, receiver) => {
    return target[propertyKey];
  };
});

/**
 * @template {object} T
 * @template {keyof T} P
 * @param {T} target
 * @param {P} propertyKey
 * @returns {TypedPropertyDescriptor<T[P]> | undefined}
 */
export const getOwnPropertyDescriptor = cacheByReturn(() => {
  if (Reflect?.getOwnPropertyDescriptor) {
    return Reflect.getOwnPropertyDescriptor;
  }
  if (Object.getOwnPropertyDescriptor) {
    return Object.getOwnPropertyDescriptor;
  }
  return (target, propertyKey) => {
    return {
      value: target[propertyKey],
      writable: true,
      enumerable: true,
      configurable: true,
    };
  };
});

/**
 * @template T
 * @param {T} target
 * @returns {T}
 */
export const getPrototypeOf = cacheByReturn(() => {
  if (Reflect?.getPrototypeOf) {
    return Reflect.getPrototypeOf;
  }
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf;
  }
  return (target) => {
    return target.prototype;
  };
});

/**
 * @template {object} T
 * @param {T} target
 * @param {keyof T} propertyKey
 * @returns {boolean}
 */
export const has = cacheByReturn(() => {
  if (Reflect?.has) {
    return Reflect.has;
  }
  return (target, propertyKey) => {
    return propertyKey in target;
  };
});

/**
 * @template T
 * @param {T} target
 * @returns {boolean}
 */
export const isExtensible = cacheByReturn(() => {
  if (Reflect?.isExtensible) {
    return Reflect.isExtensible;
  }
  if (Object.isExtensible) {
    return Object.isExtensible;
  }
  return (target) => {
    return true;
  };
});

/**
 * @template T
 * @param {T} target
 * @returns {string[]}
 */
export const ownKeys = cacheByReturn(() => {
  if (Reflect?.ownKeys) {
    return Reflect.ownKeys;
  }
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames;
  }
  return (target) => {
    return Object.keys(target);
  };
});

/**
 * @template T
 * @param {T} target
 * @returns {boolean}
 */
export const preventExtensions = cacheByReturn(() => {
  if (Reflect?.preventExtensions) {
    return Reflect.preventExtensions;
  }
  if (Object.preventExtensions) {
    return Object.preventExtensions;
  }
  return (target) => {
    return true;
  };
});

/**
 * @template T
 * @param {T} target
 * @param {keyof T} propertyKey
 * @param {any} value
 * @param {any} receiver
 * @returns {boolean}
 */
export const set = cacheByReturn(() => {
  if (Reflect?.set) {
    return Reflect.set;
  }
  return (target, propertyKey, value, receiver) => {
    target[propertyKey] = value;
    return true;
  };
});

/**
 * @template T
 * @param {T} target
 * @param {any} proto
 * @returns {boolean}
 */
export const setPrototypeOf = cacheByReturn(() => {
  if (Reflect?.setPrototypeOf) {
    return Reflect.setPrototypeOf;
  }
  if (Object.setPrototypeOf) {
    return Object.setPrototypeOf;
  }
  return (target, proto) => {
    target.prototype = proto;
    return true;
  };
});
