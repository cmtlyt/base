import { getArray } from './array';

/**
 * @template {(...args:any[])=>any} T
 * @param {T} func
 * @returns {T}
 */
export function curry(func) {
  const length = func.clength || func.length;
  if (!length) {
    throw new TypeError(
      '无法读取函数参数列表的长度，不能使用可选参数和剩余参数！！！'
    );
  }
  /** @type {T} */
  const curried = (...args) => {
    if (args.length >= length) {
      return func.apply(null, args);
    } else {
      return (...args2) => curried.apply(null, args.concat(args2));
    }
  };
  curried.clength = length;
  return curried;
}

/**
 * @template {(...args:any[])=>any} T
 * @param {T[]} funcs
 * @param {T} callback
 * @returns
 */
function _generateRunFunc(funcs, callback) {
  if (funcs.length === 0) return (arg) => arg;
  if (funcs.length === 1) return funcs[0];
  /** @type {T} */
  const runFunc = (...args) => callback(funcs, args);
  const funcLength = funcs[0].clength || funcs[0].length;
  runFunc.clength = funcLength;
  return runFunc;
}

/**
 * @template {(...args:any[])=>any} T
 * @param  {T[]} funcs
 * @returns {T}
 */
export function compose(...funcs) {
  return _generateRunFunc(funcs, (funcs, args) =>
    funcs.reduce((data, func) => func.apply(null, getArray(data)), args)
  );
}

/**
 * @template {(...args:any[])=>any} T
 * @param  {T[]} funcs
 * @returns {T}
 */
export function pipe(...funcs) {
  return _generateRunFunc(funcs, (funcs, args) =>
    funcs.reduceRight((data, func) => func.apply(null, getArray(data)), args)
  );
}
