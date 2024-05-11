/**
 * @typedef {(event:CustomEvent)=>void} CallbackFunc
 */

export class CustomEvent {
  /**
   * @param {string} type
   * @param {any} data
   */
  constructor(type, data) {
    this.type = type;
    if (Array.isArray(data) && data.length === 1) data = data[0];
    this.data = data;
    this.removeListenerFlag = false;
  }

  removeListener() {
    this.removeListenerFlag = true;
  }
}

/** @type {EventEmitter} */
let instance = null;

export class EventEmitter {
  /** @type {()=>EventEmitter} */
  static getDetaultEmitter() {
    return (instance ??= new EventEmitter());
  }

  constructor() {
    this.eventMap = {};
  }

  /** @type {(eventName:string, callback:CallbackFunc)=>EventEmitter} */
  on(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }
    this.eventMap[eventName].push(callback);
    return this;
  }
  /** @type {(eventName:string, callback:CallbackFunc, event:CustomEvent)=>void} */
  #_run(eventName, callback, event) {
    callback.apply(null, event);
    if (event.removeListenerFlag) {
      this.off(eventName, callback);
    }
  }
  /** @type {(eventName:string, ...args:any)=>EventEmitter} */
  emit(eventName, ...args) {
    if (!this.eventMap[eventName]) return;
    const event = new CustomEvent(eventName, args);
    this.eventMap[eventName].forEach((callback) =>
      this.#_run(eventName, callback, event)
    );
    return this;
  }
  /** @type {(eventName:string, callback:CallbackFunc)=>EventEmitter} */
  once(eventName, callback) {
    const onceCallback = (...args) => {
      callback.apply(null, args);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
    return this;
  }
  /** @type {(eventName:string, callback:CallbackFunc)=>EventEmitter} */
  off(eventName, callback) {
    if (!this.eventMap[eventName]) return;
    this.eventMap[eventName].splice(this.eventMap[eventName].indexOf(callback));
    return this;
  }
  /** @type {(eventName:string)=>EventEmitter} */
  clear(eventName) {
    this.eventMap[eventName] = [];
    return this;
  }
  /** @type {()=>EventEmitter} */
  clearAll() {
    this.eventMap = {};
    return this;
  }
  /**
   * @type {()=>{
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
  }
}
