import { createWorkerFunc } from '../createWorkerFunc';
import { createLinkByString, getArraySlice } from '../utils';
import { getType, isBlob, isFile, isUrl } from '../utils/verify';

/**
 * @typedef {{
 *  url: string;
 *  maxConcurrent?: number;
 *  chunkSize?: number;
 *  dataType?: 'FormData';
 *  dataKey?: string;
 *  responseType?: 'json'|'string'
 *  retryCount?: number
 *  requestMethod?: 'POST'|'PUT'
 *  headers?: Record<string, string>
 *  bodyHandler?: (data:{ chunk: Blob, chunkIdx: number }) => Record<string,any>;
 * }} UploadOptions
 * @typedef {File|Blob|string} FileLive
 * @typedef {{
 *  fileUrl: string;
 *  chunkIdxInfo: [number,number];
 *  chunkSize: number;
 *  serverPath: string;
 *  dataKey: string;
 *  responseType: string;
 *  requestMethod: string;
 *  headers: Record<string, string>;
 *  chunkIdxs: number[];
 *  retryCount: number;
 *  dataType: 'FormData'
 * }} UploadInfo
 * @typedef {{
 *  status: 'success'|'fail'|'error';
 *  chunkIdx: number;
 *  response: any;
 * }} UploadProgressInfo
 * @typedef {{
 *  status: 'finished';
 *  message: string;
 *  chunks: number[];
 *  errorChunks: number[];
 * }} UploadFinishInfo
 * @typedef {{
 *  run: (options: UploadInfo) => Promise<UploadFinishInfo>;
 *  dispose: () => void;
 *  on: (callback: Function) => void;
 *  remove: (callback: Function) => void;
 *  clearOn: () => void;
 *  onOnce: (callback: Function) => void;
 * }} UploaderWorkerController
 */

// 允许的上传请求体格式
const ALLOWED_DATA_TYPES = ['FormData'];

// 允许的返回体格式
const ALLOWED_RESPONSE_TYPES = ['json', 'string'];

// 允许的请求方式
const ALLOWED_REQUEST_METHODS = ['POST', 'PUT'];

/**
 * @param {string} key
 * @param {string} type
 * @param {any} value
 * @param {any} defaultValue
 * @param {any[]} allowedTypes
 */
function cast(key, type, value, defaultValue, allowedTypes = null) {
  if (
    // 类型判断
    getType(value) !== type ||
    // 允许值判断
    (allowedTypes && !allowedTypes.includes(value))
  ) {
    console.warn(
      `options.${key} 必须是${type}，已使用默认值 ${defaultValue} 代替`
    );
    return defaultValue;
  }
  return value;
}

/**
 * @param {*} options
 * @returns {UploadOptions}
 */
function normalizeOptions(options) {
  if (!options) throw new TypeError('options 不能为空');
  if (typeof options !== 'object') throw new TypeError('options 必须是对象');
  if (!options.url && options.url !== 'string')
    throw new TypeError('options.url 必须是非空字符串');
  const {
    url,
    maxConcurrent = 3,
    chunkSize = 1024 * 1024,
    dataType = 'FormData',
    dataKey = 'file',
    responseType = 'json',
    retryCount = 0,
    requestMethod = 'POST',
    headers = {},
    bodyHandler = () => {},
  } = options;
  const normalizedOptions = {
    url,
    maxConcurrent: cast('maxConcurrent', 'number', maxConcurrent, 3),
    chunkSize: cast('chunkSize', 'number', chunkSize, 1024 * 512),
    dataType: cast(
      'dataType',
      'string',
      dataType,
      'FormData',
      ALLOWED_DATA_TYPES
    ),
    dataKey: cast('dataKey', 'string', dataKey, 'file'),
    responseType: cast(
      'responseType',
      'string',
      responseType,
      'json',
      ALLOWED_RESPONSE_TYPES
    ),
    retryCount: cast('retryCount', 'number', retryCount, 0),
    requestMethod: cast(
      'requestMethod',
      'string',
      requestMethod,
      'POST',
      ALLOWED_REQUEST_METHODS
    ),
    headers: cast('headers', 'object', headers, {}),
    bodyHandler: cast('bodyHandler', 'function', bodyHandler, () => {}),
  };
  return normalizedOptions;
}

/**
 * @param {UploadInfo} options
 * @returns {Promise<UploadFinishInfo>}
 */
const _uploadHandle = async ({
  fileUrl,
  chunkIdxInfo,
  chunkSize,
  serverPath,
  dataKey,
  responseType,
  requestMethod,
  headers,
  chunkIdxs: _chunkIdxs,
  retryCount,
  dataType,
}) => {
  const errorIdxs = [];
  const file = await fetch(fileUrl).then((res) => res.blob());
  const [chunkStart, chunkEnd] = chunkIdxInfo;
  const chunkIdxs =
    _chunkIdxs.length > 0
      ? _chunkIdxs
      : Array.from({ length: chunkEnd - chunkStart }, (_, i) => chunkStart + i);
  // 获取切片数据
  /** @param {number} idx */
  const getChunkData = (idx) => {
    if (chunkSize <= 0) return file.slice();
    const start = idx * chunkSize;
    const end = Math.min(file.size, start + chunkSize);
    return file.slice(start, end);
  };
  // 响应体处理
  /** @param {Response} res */
  const getResponse = async (res) => {
    if (responseType === 'json') {
      return await res.json();
    } else if (responseType === 'string') {
      return await res.text();
    } else {
      return 'none';
    }
  };
  // 响应处理
  /** @param {Response} res */
  const fetchHandle = async (idx, res) => {
    const response = await getResponse(res);
    const progressInfo = {
      chunkIdx: idx,
      status: 'loading',
      response: response,
    };
    if (res.status === 200) {
      progressInfo.status = 'success';
    } else {
      progressInfo.status = 'fail';
      errorIdxs.push(idx);
    }
    self.postMessage(progressInfo);
  };
  // 错误处理
  /** @param {Error} err */
  const fetchErrorHandle = (idx, err) => {
    errorIdxs.push(idx);
    self.postMessage({ chunkIdx: idx, status: 'error', message: err });
  };
  /** @type {(options:{ chunk: Blob, chunkIdx: number }) => Promise<Record<string,any>>} */
  // @ts-ignore
  const _userBodyHandler = userBodyHandler || (() => {});
  // 表单请求体处理
  /** @param {number} idx */
  const formDataBodyHandler = async (idx) => {
    const chunk = getChunkData(idx);
    const formData = new FormData();
    formData.append(dataKey, chunk);
    formData.append('chunkIdx', idx + '');
    const extendData = await _userBodyHandler({ chunk, chunkIdx: idx });
    if (typeof extendData === 'object') {
      Object.keys(extendData).forEach((key) => {
        formData.append(key, extendData[key]);
      });
    }
    return formData;
  };
  // 请求体处理
  /** @param {number} idx */
  const bodyHandler = async (idx) => {
    if (dataType === 'FormData') {
      return formDataBodyHandler(idx);
    }
  };
  // 实际上传
  /** @param {number[]} chunkIdxs */
  const run = async (chunkIdxs) => {
    for (const idx of chunkIdxs) {
      const body = await bodyHandler(idx);
      await fetch(serverPath, { method: requestMethod, body, headers })
        .then(fetchHandle.bind(null, idx))
        .catch(fetchErrorHandle.bind(null, idx));
    }
  };

  await run(chunkIdxs);

  for (let i = 0; i < retryCount; ++i) {
    if (errorIdxs.length === 0) break;
    const retryChunks = [...errorIdxs];
    errorIdxs.length = 0;
    await run(retryChunks);
  }

  return {
    status: 'finished',
    message: '上传结束',
    chunks: chunkIdxs,
    errorChunks: errorIdxs,
  };
};

const UPLOAD_CONTROLLER_STATUS = {
  waiting: 'waiting',
  uploading: 'uploading',
  closed: 'closed',
};

/**
 * @param {FileLive} file
 * @returns {Promise<Blob|File>}
 */
async function _getFile(file) {
  // @ts-ignore
  if (isFile(file)) return Promise.resolve(file);
  // @ts-ignore
  if (isBlob(file)) return Promise.resolve(file);
  if (isUrl(file)) {
    // @ts-ignore
    return await fetch(file).then((res) => res.blob());
  }
}

/**
 * @param {string} funcString
 * @returns {string}
 */
function _formatFuncString(funcString) {
  if (!funcString) return '';
  if (funcString.includes('=>')) return funcString;
  if (funcString.startsWith('function')) return funcString;
  if (funcString.startsWith('async function')) return funcString;
  if (funcString.startsWith('async'))
    return funcString.replace('async', 'async function ');
  return `function ${funcString}`;
}

/**
 * @param {{
 *  bodyHandler: (body: { chunk: Blob, chunkIdx: number }) => Record<string,any>;
 * }} options
 * @returns
 */
function _workerUtilsGenerate({ bodyHandler }) {
  const bodyHandlerStr = _formatFuncString(bodyHandler?.toString());
  return createLinkByString(`
    ${bodyHandler ? `const userBodyHandler = ${bodyHandlerStr};` : ''}
  `);
}

class UploadController {
  /**@type {object} */
  static instanceMap = {};

  /**
   * @param {UploadOptions} options
   * @returns {UploadController}
   */
  static getInstance(options) {
    const { url } = options;
    return (UploadController.instanceMap[url] ??= new UploadController(
      options
    ));
  }

  /**
   * @param {UploadOptions} options
   */
  constructor(options) {
    this._serverPath = options.url;
    this._maxConcurrent = options.maxConcurrent;
    this._chunkSize = options.chunkSize;
    this._dataType = options.dataType;
    this._dataKey = options.dataKey;
    this._responseType = options.responseType;
    this._retryCount = options.retryCount;
    this._requestMethod = options.requestMethod;
    const bodyHandler = options.bodyHandler;

    this._originOptions = options;
    this._uploadQueue = [];
    this._status = UPLOAD_CONTROLLER_STATUS.waiting;
    this._finishInfo = [];
    const workerUtilsLink = _workerUtilsGenerate({ bodyHandler });
    console.log(workerUtilsLink);
    /** @type {UploaderWorkerController[]} */
    this._uploadWorkers = Array.from({ length: this._maxConcurrent }, () =>
      createWorkerFunc(_uploadHandle, [workerUtilsLink], { reuse: false })
    );
  }

  /**
   * @param {(progress: UploadProgressInfo)=>void} progressCallback
   * @param {UploadProgressInfo} progressInfo
   */
  _onProgress(progressCallback, progressInfo) {
    progressCallback(progressInfo);
  }
  /**
   * @param {(data:{
   *  workerIdx: number;
   *  data: UploadFinishInfo;
   * }[])=>void} resolve
   * @param {number} needWorkerCount
   * @param {number} workerIdx
   * @param {UploadFinishInfo} res
   */
  async _workerResolve(resolve, needWorkerCount, workerIdx, res) {
    this._finishInfo.push({ workerIdx, data: res });
    if (this._finishInfo.length === needWorkerCount) {
      resolve(this._finishInfo);
      this._finishInfo = [];
    }
  }
  async _runWorker({
    fileUrl,
    start,
    end,
    onProgress,
    worker,
    resolve,
    reject,
    needWorkerCount,
    idx,
    chunkIdxs = [],
  }) {
    const task = {
      chunkIdxs,
      fileUrl,
      /** @type {[number,number]} */
      chunkIdxInfo: [start, end],
      chunkSize: this._chunkSize,
      serverPath: this._serverPath,
      dataKey: this._dataKey,
      responseType: this._responseType,
      requestMethod: this._requestMethod,
      headers: this._originOptions.headers,
      retryCount: this._retryCount,
      dataType: this._dataType,
    };
    const onMessage = this._onProgress.bind(this, onProgress);
    worker.on(onMessage);
    worker
      .run(task)
      .then(
        this._workerResolve.bind(this, resolve, needWorkerCount, idx),
        reject
      )
      .finally(() => {
        worker.remove(onMessage);
        this._status = UPLOAD_CONTROLLER_STATUS.waiting;
        this._runTask();
      });
  }
  async _runTask() {
    if (this._status === UPLOAD_CONTROLLER_STATUS.closed) return;
    if (this._status === UPLOAD_CONTROLLER_STATUS.uploading) return;
    if (this._uploadQueue.length === 0) return;
    if (this._uploadWorkers.length === 0) return;

    this._status = UPLOAD_CONTROLLER_STATUS.uploading;
    const {
      file: _templateFile,
      resolve,
      reject,
      chunkIdxs = [],
      onProgress = () => {},
    } = this._uploadQueue.shift();
    const file = await _getFile(_templateFile);
    const fileUrl = URL.createObjectURL(file);
    const chunkTotal =
      this._chunkSize <= 0 ? 1 : Math.ceil(file.size / this._chunkSize);
    const taskChunkSize = Math.ceil(chunkTotal / this._maxConcurrent);
    const needWorkerCount = Math.ceil(chunkTotal / taskChunkSize);
    const retryChunksMap = getArraySlice(chunkIdxs, this._maxConcurrent);

    const runWorkerBaseData = {
      fileUrl,
      onProgress,
      resolve,
      reject,
      needWorkerCount,
    };

    if (retryChunksMap.length) {
      retryChunksMap.forEach((chunkIdxs, idx) => {
        const worker = this._uploadWorkers[idx];
        this._runWorker({
          chunkIdxs,
          start: 0,
          end: 0,
          idx,
          worker,
          ...runWorkerBaseData,
        });
      });
      return;
    }

    const runningCount = Math.min(needWorkerCount, this._uploadWorkers.length);
    for (let idx = 0; idx < runningCount; ++idx) {
      const worker = this._uploadWorkers[idx];
      const start = idx * taskChunkSize;
      const end = Math.min(chunkTotal, start + taskChunkSize);
      this._runWorker({ start, end, idx, worker, ...runWorkerBaseData });
    }
  }
  /**
   *
   * @param {FileLive} file
   * @param {{
   *  onProgress: (progress: UploadProgressInfo)=>void
   *  chunkIdxs: number[]
   * }} options
   * @returns
   */
  async _createUploadTask(file, { onProgress = () => {}, chunkIdxs = [] }) {
    return new Promise((resolve, reject) => {
      this._uploadQueue.push({ file, onProgress, chunkIdxs, resolve, reject });
      this._runTask();
    });
  }
  /**
   * @param {FileLive} file
   * @param {number[]} chunkIdxs
   * @param {{
   *  onProgress: (progress: UploadProgressInfo)=>void
   * }} options
   * @returns
   */
  retry(file, chunkIdxs, options) {
    return this._createUploadTask(file, { chunkIdxs, ...options });
  }
  /**
   * @param {FileLive} file
   * @param {{
   *  onProgress: (progress: UploadProgressInfo)=>void
   * }} options
   * @returns {Promise<UploadFinishInfo>}
   */
  upload(file, { onProgress = () => {} }) {
    if (this._status === UPLOAD_CONTROLLER_STATUS.closed) return;
    return this._createUploadTask(file, { onProgress, chunkIdxs: [] });
  }
  /**
   * @param {FileLive} file
   * @returns {boolean}
   */
  abort(file) {
    const _file = this._uploadQueue.splice(this._uploadQueue.indexOf(file), 1);
    return !!_file?.length;
  }
  clear() {
    this._uploadQueue = [];
  }
  close() {
    this._status = UPLOAD_CONTROLLER_STATUS.closed;
    this._uploadWorkers.forEach((worker) => worker.dispose());
  }
}
/**
 * @param {UploadOptions} options
 * @returns {UploadController}
 */
export function createUploader(options) {
  const normalizedOptions = normalizeOptions(options);
  return UploadController.getInstance(normalizedOptions);
}
