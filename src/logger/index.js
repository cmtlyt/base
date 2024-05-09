import { isNull } from '../utils/verify';
import { getArray } from '../utils/array';
import { cacheByReturn } from '../utils/cache';
import { formatDate } from '../utils/date';

/**
 * @typedef {(moduleId:any, ...args:any[]) => void} ControllerFunc
 * @typedef {(moduleId:any, ...args:any[]) => Logger} LoggerFunc
 * @typedef {{
 *  message: string,
 *  moduleId: any,
 *  method: string,
 *  date: Date,
 *  error: null | Error,
 * }} LogInfo
 * @typedef {{
 *  log: ControllerFunc,
 *  info: ControllerFunc,
 *  warn: ControllerFunc,
 *  error: ControllerFunc,
 *  debug: ControllerFunc,
 *  onOutput?: (logInfo:LogInfo) => void
 * }} Controller
 * @typedef {(data:any[], moduleId:any, method:string, date:Date) => string | any[]} MessageTemplateFunc
 * @typedef {(message:string) => boolean} IgnoreMessageFunc
 * @typedef {{
 *  showModuleIds?: string[],
 *  showMethods?: string[],
 *  ignoreMessage?: string[] | IgnoreMessageFunc,
 *  messageTemplate?: string | MessageTemplateFunc,
 *  controller?: Controller,
 * }} LoggerOptions
 * @typedef {{
 *  moduleIdReg: RegExp,
 *  methodReg: RegExp,
 *  dateReg: RegExp,
 *  controllerMethods: string[],
 *  defaultController: Console,
 *  defaultMessageTemplate: string,
 * }} Constant
 */

/** @type Constant */
const CONSTANT = {
  moduleIdReg: /#\[moduleId\]/g,
  methodReg: /#\[method\]/g,
  dateReg: /#\[date(:.*?)?\]/g,
  controllerMethods: ['log', 'info', 'warn', 'error', 'debug'],
  defaultController: console,
  defaultMessageTemplate: `#[date] #[moduleId]-#[method]:=>#[message]`,
};

/**
 * @param {Controller} controller
 * @returns {boolean}
 */
function checkController(controller) {
  if (isNull(controller) || typeof controller !== 'object') return false;
  return CONSTANT.controllerMethods.every((method) => method in controller);
}

/**
 * @param {Controller} controller
 * @param {Controller} backController
 * @returns {Controller}
 */
function getController(controller, backController = null) {
  if (checkController(controller)) {
    return controller;
  }
  if (checkController(backController)) {
    return backController;
  }
  const { defaultController, controllerMethods } = CONSTANT;
  console.warn(
    `控制器至少得实现[${controllerMethods}]等方法,已使用默认控制器\`${defaultController}\`替代`
  );
  return defaultController;
}

/**
 * @param {string|MessageTemplateFunc} messageTemplate
 * @returns {MessageTemplateFunc}
 */
function getMessageTemplate(messageTemplate) {
  if (typeof messageTemplate === 'function') return messageTemplate;
  let currTemplate = CONSTANT.defaultMessageTemplate;
  if (
    typeof messageTemplate === 'string' &&
    messageTemplate.includes('#[message]')
  ) {
    currTemplate = messageTemplate;
  } else {
    console.warn(
      `消息模板中没有消息的占位符,已使用默认模板\`${currTemplate}\`替代`
    );
  }
  const { moduleIdReg, methodReg, dateReg } = CONSTANT;
  return (_, moduleId, method, date) => {
    return currTemplate
      .replace(moduleIdReg, moduleId)
      .replace(methodReg, method)
      .replace(dateReg, (_, format) => {
        return formatDate(date, format?.slice(1));
      });
  };
}

/**
 * @param {string[]|IgnoreMessageFunc} ignoreMessage
 * @returns {IgnoreMessageFunc}
 */
function getIgnoreMessage(ignoreMessage) {
  if (typeof ignoreMessage === 'function') return ignoreMessage;
  ignoreMessage = getArray(ignoreMessage);
  return cacheByReturn(() => {
    if (ignoreMessage.length)
      return (message) => ignoreMessage.includes(message.toString());
    return false;
  });
}

/**
 * @param {string[]} showMethods
 * @param {Controller} controller
 * @returns {string[]}
 */
function getShowMethods(showMethods, controller) {
  showMethods = getArray(showMethods);
  return showMethods.filter((method) => {
    const has = method in controller;
    if (!has) console.warn(`传入的控制器中不存在${method}方法,已自动排除`);
    return has;
  });
}

/**
 * @param {LoggerOptions} options
 */
function normalizeOptions(options = {}) {
  if (typeof options !== 'object') options = {};
  const { defaultController, defaultMessageTemplate } = CONSTANT;
  const {
    showModuleIds = [],
    showMethods = [],
    controller: _controller = defaultController,
    ignoreMessage = [],
    messageTemplate = defaultMessageTemplate,
  } = options;

  const controller = getController(_controller);

  return {
    showMethods: getShowMethods(showMethods, controller),
    showModuleIds: getArray(showModuleIds),
    controller,
    ignoreMessage: getIgnoreMessage(ignoreMessage),
    messageTemplate: getMessageTemplate(messageTemplate),
  };
}

export class Logger {
  /** @type {Logger} */
  static instance = null;

  /**
   * @param {LoggerOptions} options
   * @returns {Logger}
   */
  static getInstance(options) {
    return (Logger.instance ??= new Logger(options));
  }

  /**
   * @param {LoggerOptions} options
   */
  constructor(options = {}) {
    const {
      showMethods,
      showModuleIds,
      controller,
      ignoreMessage,
      messageTemplate,
    } = normalizeOptions(options);
    this._originOptions = options;
    this._showMethods = showMethods;
    this._showModuleIds = showModuleIds;
    this._controller = controller;
    this._ignoreMessage = ignoreMessage;
    this._messageTemplate = messageTemplate;
  }

  get messageTemplate() {
    return (
      this._originOptions.messageTemplate || CONSTANT.defaultMessageTemplate
    );
  }
  set messageTemplate(value) {
    this._originOptions.messageTemplate = value;
    this._messageTemplate = getMessageTemplate(value);
  }
  get showMethods() {
    return this._originOptions.showMethods || [...this._showMethods];
  }
  set showMethods(value) {
    this._originOptions.showMethods = value;
    this._showMethods = getShowMethods(value, this._controller);
  }
  get ignoreMessage() {
    return this._originOptions.ignoreMessage || [];
  }
  set ignoreMessage(value) {
    this._originOptions.ignoreMessage = value;
    this._ignoreMessage = getIgnoreMessage(value);
  }
  get showModuleIds() {
    return this._originOptions.showModuleIds || [];
  }
  set showModuleIds(value) {
    this._originOptions.showModuleIds = value;
    this._showModuleIds = getArray(value);
  }
  get controller() {
    return this._controller;
  }
  set controller(value) {
    this._controller = getController(value, this._controller);
  }

  /**
   * @param {any[]} args
   * @returns {any[]}
   */
  _removeIgnoreMessage(args) {
    const ignoreMessage = this._ignoreMessage;
    return args.filter((item) => !ignoreMessage(item));
  }
  /**
   * @param {string} method
   * @param {any} moduleId
   * @returns {boolean}
   */
  _checkOutputConditions(method, moduleId) {
    // 可输出的方法
    const checkMethod =
      !this._showMethods.length || this._showMethods.includes(method);
    // 可输出的模块
    const checkModule =
      !this._showModuleIds.length || this._showModuleIds.includes(moduleId);
    return checkMethod && checkModule;
  }
  /**
   * @param {string} method
   * @param {any} moduleId
   * @param {Date} date
   * @param {any[]} args
   * @returns {any[]}
   */
  _formatOutputMessage(method, moduleId, date, args) {
    args = this._removeIgnoreMessage(args);
    let messageTemplate = this._messageTemplate(args, moduleId, method, date);
    if (Array.isArray(messageTemplate)) return messageTemplate;
    const [preMessage, nextMessage] = messageTemplate.split('#[message]');
    if (isNull(nextMessage)) return [preMessage];
    return [preMessage, ...args, nextMessage].filter((item) => item);
  }
  /**
   * @param {string} method
   * @param {any} moduleId
   * @param {any[]} args
   */
  _output(method, moduleId, args) {
    if (!this._checkOutputConditions(method, moduleId)) return;
    const controller = this._controller;
    const date = new Date();
    const messages = this._formatOutputMessage(method, moduleId, date, args);
    const logInfo = {
      moduleId,
      method,
      date,
      error: null,
      message: messages.join(' '),
    };
    try {
      controller[method].apply(controller, messages);
    } catch (e) {
      logInfo.error = e;
    }
    this._onOutput(logInfo);
  }
  /**
   * @param {LogInfo} logInfo
   */
  _onOutput(logInfo) {
    const outputListener = this._controller.onOutput;
    typeof outputListener === 'function' && outputListener(logInfo);
  }
  /** @type {LoggerFunc} */
  log(moduleId, ...args) {
    this._output('log', moduleId, args);
    return this;
  }
  /** @type {LoggerFunc} */
  info(moduleId, ...args) {
    this._output('info', moduleId, args);
    return this;
  }
  /** @type {LoggerFunc} */
  warn(moduleId, ...args) {
    this._output('warn', moduleId, args);
    return this;
  }
  /** @type {LoggerFunc} */
  error(moduleId, ...args) {
    this._output('error', moduleId, args);
    return this;
  }
  /** @type {LoggerFunc} */
  debug(moduleId, ...args) {
    this._output('debug', moduleId, args);
    return this;
  }
  /**
   * @returns {Controller}
   */
  getDeconstructableObject() {
    return {
      log: this.log.bind(this),
      info: this.info.bind(this),
      warn: this.warn.bind(this),
      error: this.error.bind(this),
      debug: this.debug.bind(this),
    };
  }
}
