import { getRandomString, createLinkByString } from '../utils/string';

/**
 * @param {Function} func
 * @param {string[]} importScript
 * @param {boolean} userNeedPost
 * @returns {string} script string
 */
function generateWorkerScript(func, importScript = [], userNeedPost = false) {
  return `
${importScript.length ? `importScripts("${importScript.join(', ')}");` : ''}
const func = ${func};

const { postMessage } = (()=>{
  const postMessage = (data) => {
    self.postMessage({ __clUserCall: true, data })
  };
  return { postMessage: (data) => postMessage(data) };
})();

self.onmessage = async (e) => {
  const { callId, data: args } = e.data
  try {
    const result = await func.apply(null, ${
      userNeedPost ? `[postMessage, ...args]` : 'args'
    });
    self.postMessage({ __clSysCall: true, type: 'success', result, callId });
  } catch (e) {
    self.postMessage({ __clSysCall: true, callId, type: 'error', error: e })
  }
}
self.onerror = (e) => {
  self.postMessage({ __clSysCall: true, type: 'error', error: e })
}`;
}

/**
 * @param {string|URL} scriptUrl url
 * @returns {Worker}
 */
function createWorker(scriptUrl) {
  const worker = new Worker(scriptUrl);
  return worker;
}

/**
 * @returns {{
 *  on:(callback:(...args:any)=>void)=>void,
 *  remove:(callback:(...args:any)=>void)=>void,
 *  clearOn:()=>void,
 *  onOnce:(callback:(...args:any)=>void)=>void,
 *  emit:(data: any) => void
 * }}
 */
function createEventFunc() {
  const userOnMessage = [];
  const on = (callback) => {
    userOnMessage.push(callback);
  };
  const remove = (callback) => {
    userOnMessage.splice(userOnMessage.indexOf(callback), 1);
  };
  const clearOn = () => {
    userOnMessage.length = 0;
  };
  const onOnce = (callback) => {
    const onceCallback = (...args) => {
      callback(...args);
      remove(onceCallback);
    };
    on(onceCallback);
  };
  const emit = (data) => {
    for (const callback of userOnMessage) {
      callback(data);
    }
  };
  return { on, remove, clearOn, onOnce, emit };
}

/**
 * @param {{
 *   emit: (data: any) => void
 *   type: string
 *   result: any
 *   error: any
 *   resolve: (data: any) => void
 *   reject: (data: any) => void
 *   isSysCall: boolean
 *   eventData: any
 * }} options
 */
function messageHandle({
  emit,
  type,
  result,
  error,
  resolve = () => {},
  reject = () => {},
  isSysCall,
  eventData,
}) {
  if (isSysCall) {
    if (type === 'success') {
      resolve(result);
    } else {
      reject(error);
    }
  } else {
    const { __clUserCall, data } = eventData;
    if (__clUserCall) {
      emit(data);
    } else {
      emit(eventData);
    }
  }
}

/**
 * 创建调用worker的方法(复用worker)
 * @param {string} scriptUrl
 * @returns {WorkerFunc<any,any>}
 */
function createWorkerFuncs(scriptUrl) {
  const worker = createWorker(scriptUrl);
  let isClose = false;
  // 缓存每次调用的promise, 区分不同的调用
  // 只存不删缓存会膨胀
  let cache = {};
  const { emit, ...eventFuncs } = createEventFunc();
  // 绑定一次事件就好了
  worker.onmessage = (e) => {
    // 这还需要拿到id...
    const { type, result, error, callId, __clSysCall } = e.data;
    const { resolve, reject } = cache[callId] || {};
    if (__clSysCall) {
      // 过河拆桥
      delete cache[callId];
    }
    messageHandle({
      emit,
      type,
      result,
      error,
      resolve,
      reject,
      isSysCall: __clSysCall,
      eventData: e.data,
    });
  };
  const run = async (...args) => {
    if (isClose) throw new Error('worker资源已释放');
    // 生成调用id
    const id = getRandomString(16);
    return new Promise((resolve, reject) => {
      cache[id] = { resolve, reject };
      // 每次调用的id用事件传递就好了
      worker.postMessage({ callId: id, data: args });
    });
  };
  // 这个是复用的,就需要释放被复用的worker了,但是...url
  const dispose = () => {
    worker.terminate();
    cache = null;
    isClose = true;
    URL.revokeObjectURL(scriptUrl);
  };
  return { run, dispose, ...eventFuncs };
}

/**
 * @param {string} scriptUrl
 * @returns {WorkerFunc<any,any>}
 */
function createOnceWorkerFuncs(scriptUrl) {
  let isClose = false;
  const { emit, ...eventFuncs } = createEventFunc();
  const run = async (...args) => {
    if (isClose) throw new Error('worker资源已释放');
    const worker = createWorker(scriptUrl);
    return new Promise((resolve, reject) => {
      // 反正每次都会创建一个新的,没必要管多次调用之间的冲突
      worker.onmessage = (e) => {
        const { type, result, error, __clSysCall } = e.data;
        if (__clSysCall) {
          worker.terminate();
        }
        messageHandle({
          emit,
          type,
          result,
          error,
          resolve,
          reject,
          isSysCall: __clSysCall,
          eventData: e.data,
        });
      };
      worker.postMessage({ data: args });
    });
  };
  // 那好像每次都清除了worker dispose没啥必要啊
  const dispose = () => {
    isClose = true;
    URL.revokeObjectURL(scriptUrl);
  };
  return { run, dispose, ...eventFuncs };
}

/**
 * @template {any[]} T
 * @template {any} R
 * @typedef {{
 *  run:(...args:T)=>Promise<R>,
 *  dispose:()=>void,
 *  on:(handle:(...args:any)=>void)=>void,
 *  remove:(handle:(...args:any)=>void)=>void,
 *  clearOn:()=>void,
 *  onOnce:(handle:(...args:any)=>void)=>void
 * }} WorkerFunc
 */

/**
 * @template {any[]} T
 * @template {any} R
 * @param {(...args:T)=>R} func
 * @param {string[]} importScripts
 * @param {{
 *  reuse: boolean;
 *  needPost: boolean;
 * }} options
 * @returns {WorkerFunc<T,R>}
 */
export function createWorkerFunc(
  func,
  importScripts = [],
  { reuse = true, needPost = false }
) {
  const workerScript = generateWorkerScript(func, importScripts, needPost);
  const scriptUrl = createLinkByString(workerScript);
  // 复用版的funcs
  if (reuse) {
    const workerFunc = createWorkerFuncs(scriptUrl);
    return workerFunc;
  }
  // 不需要复用的话每次都要创建一个新的worker
  const workerOnceFunc = createOnceWorkerFuncs(scriptUrl);
  return workerOnceFunc;
}
