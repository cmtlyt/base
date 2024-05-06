/**
 * @param {string} type
 * @param {any} data
 */
export function CustomEvent(type, data) {
  if (new.target !== CustomEvent)
    throw new Error(
      'CustomEvent is a constructor and should be called with the `new` keyword'
    );
  this.type = type;
  if (Array.isArray(data) && data.length === 1) data = data[0];
  this.data = data;
  this.removeListenerFlag = false;
}

CustomEvent.prototype = {
  removeListener() {
    this.removeListenerFlag = true;
  },
};

/**
 * @constructor
 */
export function EventEmitter() {
  if (new.target !== EventEmitter)
    throw new Error(
      'EventEmitter is a constructor and should be called with the `new` keyword'
    );
  this.eventMap = {};
}

/**
 * @typedef {(event:CustomEvent)=>void} CallbackFunc
 */

/**
 * @type {{
 *  on: (eventName:string, callback:CallbackFunc)=>EventEmitter,
 *  _run: (eventName:string, callback:CallbackFunc, event:CustomEvent)=>void
 *  emit: (eventName:string, ...args:any)=>EventEmitter,
 *  once: (eventName:string, callback:CallbackFunc)=>EventEmitter,
 *  off: (eventName:string, callback:CallbackFunc)=>EventEmitter,
 *  clear: (eventName:string)=>EventEmitter,
 *  clearAll: ()=>EventEmitter
 * }}
 */
EventEmitter.prototype = {
  on(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }
    this.eventMap[eventName].push(callback);
    return this;
  },
  _run(eventName, callback, event) {
    callback.apply(null, event);
    if (event.removeListenerFlag) {
      this.off(eventName, callback);
    }
  },
  emit(eventName, ...args) {
    if (!this.eventMap[eventName]) return;
    const event = new CustomEvent(eventName, args);
    this.eventMap[eventName].forEach((callback) =>
      this._run(eventName, callback, event)
    );
    return this;
  },
  once(eventName, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
    return this;
  },
  off(eventName, callback) {
    if (!this.eventMap[eventName]) return;
    this.eventMap[eventName].splice(this.eventMap[eventName].indexOf(callback));
    return this;
  },
  clear(eventName) {
    this.eventMap[eventName] = [];
    return this;
  },
  clearAll() {
    this.eventMap = {};
    return this;
  },
  /**
   * @returns {{
   *  on: (eventName:string, callback:CallbackFunc)=>EventEmitter,
   *  emit: (eventName:string, ...args:any)=>EventEmitter,
   *  once: (eventName:string, callback:CallbackFunc)=>EventEmitter,
   *  off: (eventName:string, callback:CallbackFunc)=>EventEmitter,
   *  clear: (eventName:string)=>EventEmitter,
   *  clearAll: ()=>EventEmitter
   * }}
   */
  getFuncMap() {
    return {
      on: this.on.bind(this),
      emit: this.emit.bind(this),
      once: this.once.bind(this),
      off: this.off.bind(this),
      clear: this.clear.bind(this),
      clearAll: this.clearAll.bind(this),
    };
  },
};

/**
 * @returns {EventEmitter}
 */
EventEmitter.getDetaultEmitter = () => {
  if (!EventEmitter.instance) {
    EventEmitter.instance = new EventEmitter();
  }
  return EventEmitter.instance;
};
