export class Calculator {
  #_last;
  #_result;

  /**
   * @param {number} initValue
   */
  constructor(initValue = 0) {
    this.#_last = initValue;
    this.#_result = 0;
  }
  /**
   * @param {(calc: Calculator)=>void|Calculator|number} func
   * @param {number} initValue
   * @returns {Calculator|number}
   */
  static group(func, initValue = 0) {
    const calculator = new Calculator(initValue);
    const clientResult = func(calculator);
    return clientResult || calculator;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  add(value) {
    this.#_result = this.#_result + this.#_last;
    this.#_last = value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  sub(value) {
    this.#_result = this.#_result + this.#_last;
    this.#_last = -value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  mut(value) {
    this.#_last *= value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  div(value) {
    this.#_last /= value;
    return this;
  }
  /**
   * @returns {number}
   */
  getCurrValue() {
    return this.#_result + this.#_last;
  }
  /**
   * @returns {number}
   */
  valueOf() {
    this.#_last = this.#_result + this.#_last;
    this.#_result = 0;
    return this.#_last;
  }
}
