import { getRandomString, createLinkByString } from "../utils/string";

/**
 * @param {Function} func
 * @param {string[]} importScript
 * @returns {string} script string
 */
function generateWorkerScript(func, importScript = []) {
  return `
${importScript.length ? `importScripts("${importScript.join(", ")}");` : ""}
const func = ${func};
self.onmessage = async (e) => {
  const { callId, data: args } = e.data
  try {
    const result = await func.apply(null, args);
    self.postMessage({ type: 'success', result, callId });
  } catch (e) {
    self.postMessage({ callId, type: 'error', error: e })
  }
}
self.onerror = (e) => {
  self.postMessage({ type: 'error', error: e })
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
 * 创建调用worker的方法(复用worker)
 * @param {string} scriptUrl
 * @returns {WorkerFunc}
 */
function createWorkerFuncs(scriptUrl) {
  const worker = createWorker(scriptUrl);
  let isClose = false;
  // 缓存每次调用的promise, 区分不同的调用
  // 只存不删缓存会膨胀
  let cache = {};
  // 绑定一次事件就好了
  worker.onmessage = (e) => {
    // 这还需要拿到id...
    const { type, result, error, callId } = e.data;
    const { resolve, reject } = cache[callId];
    // 过河拆桥
    delete cache[callId];
    if (type === "success") {
      resolve(result);
    } else {
      reject(error);
    }
  };
  const run = async (...args) => {
    if (isClose) throw new Error("worker资源已释放");
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
  return { run, dispose };
}

/**
 * @param {string} scriptUrl
 * @returns {WorkerFunc}
 */
function createOnceWorkerFuncs(scriptUrl) {
  let isClose = false;
  const run = async (...args) => {
    if (isClose) throw new Error("worker资源已释放");
    const worker = createWorker(scriptUrl);
    return new Promise((resolve, reject) => {
      // 反正每次都会创建一个新的,没必要管多次调用之间的冲突
      worker.onmessage = (e) => {
        const { type, result, error } = e.data;
        if (type === "success") {
          resolve(result);
        } else {
          reject(error);
        }
        // 虽然不复用但是每次都要清除一下... 不然worker太多了
        worker.terminate();
      };
      worker.postMessage({ data: args });
    });
  };
  // 那好像每次都清除了worker dispose没啥必要啊
  const dispose = () => {
    isClose = true;
    URL.revokeObjectURL(scriptUrl);
  };
  return { run, dispose };
}

/**
 * @typedef {{run:(...args:T)=>Promise<R>,dispose:()=>void}} WorkerFunc
 * @param {(...args:T)=>R} func
 * @param {string[]} importScripts
 * @param {boolean} reuse
 * @returns {WorkerFunc}
 */
export function createWorkerFunc(func, importScripts = [], reuse = true) {
  const workerScript = generateWorkerScript(func, importScripts);
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

/**
 * @param {(...args:T)=>R} func
 * @param {string[]} imoprtScripts
 * @param {boolean} reuse
 * @returns {WorkerFunc}
 */
export function useWorkerFunc(func, imoprtScripts = [], reuse = true) {
  return createWorkerFunc(func, imoprtScripts, reuse);
}
