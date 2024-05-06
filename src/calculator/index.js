export class Calculator {
  /**
   * @param {number} initValue
   */
  constructor(initValue = 0) {
    this.last = initValue;
    this.result = 0;
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
    this.result = this.result + this.last;
    this.last = value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  sub(value) {
    this.result = this.result + this.last;
    this.last = -value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  mut(value) {
    this.last *= value;
    return this;
  }
  /**
   * @param {number} value
   * @returns {Calculator}
   */
  div(value) {
    this.last /= value;
    return this;
  }
  /**
   * @returns {number}
   */
  valueOf() {
    return this.result + this.last;
  }
}
