import { cacheByReturn } from './cache';
import { getNow } from './date';
import { apply } from './reflect';

/**
 * @template {(...args:any[])=>void} T
 * @param {T} func
 * @param {number} time
 * @param {boolean} immediately
 * @returns {T}
 */
export function debounce(func, time = 1000, immediately = false) {
  if (time <= 0) return func;
  let timer = null;
  // @ts-ignore
  return cacheByReturn(() => {
    if (immediately) {
      return (...args) => {
        if (timer) clearTimeout(timer);
        else func.apply(this, args);
        timer = setTimeout(() => {
          timer = null;
        }, time);
      };
    }
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, time);
    };
  });
}

/**
 * @template {(...args:any)=>any} T
 * @param {T} func
 * @param {number} time
 * @param {boolean} immediately
 * @returns {T}
 */
export function throttle(func, time = 100, immediately = true) {
  if (time <= 0) return func;
  let timer = null;
  // @ts-ignore
  return cacheByReturn(() => {
    if (immediately) {
      return (...args) => {
        if (timer) return;
        func.apply(null, args);
        timer = setTimeout(() => {
          timer = null;
        }, time);
      };
    }
    return (...args) => {
      if (timer) return;
      timer = setTimeout(() => {
        func.apply(null, args);
        timer = null;
      }, time);
    };
  });
}

const _runTask = cacheByReturn(() => {
  if (requestIdleCallback) {
    return (task, args, resolve, reject) => {
      requestIdleCallback((idle) => {
        if (idle.timeRemaining() > 0) {
          try {
            const result = apply(task, null, args);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else {
          _runTask(task, args, resolve, reject);
        }
      });
    };
  }
  if (requestAnimationFrame) {
    return (task, args, resolve, reject) => {
      const start = getNow();
      requestAnimationFrame(() => {
        if (getNow() - start < 16.6) {
          try {
            const result = apply(task, null, args);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else {
          _runTask(task, args, resolve, reject);
        }
      });
    };
  }
  return (task, args, resolve, reject) => {
    setTimeout(() => {
      try {
        const result = apply(task, null, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, 0);
  };
});

/**
 * @template T
 * @template R
 * @param {(arg:T)=>R} task
 * @returns {(datas:T[]|number)=>Promise<R[]>}
 */
export function chunkTask(task) {
  return (datas) => {
    const results = [];
    return new Promise(async (resolve, reject) => {
      const func = async (args) => {
        return new Promise(_runTask.bind(null, task, args)).then(
          (res) => results.push(res),
          reject
        );
      };
      if (typeof datas === 'number') {
        for (let i = 0; i < datas; ++i) {
          await func(i);
        }
      } else if (Array.isArray(datas)) {
        for (const key in datas) {
          const data = datas[key];
          await func(data);
        }
      }
      resolve(results);
    });
  };
}

/**
 * @param {number} time
 * @returns {Promise<void>}
 */
export const sleep = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
