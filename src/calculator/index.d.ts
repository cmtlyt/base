type TCalcNumber = number | Calculator;

export declare class Calculator {
  constructor(initValue?: TCalcNumber);

  static group(
    func: (calc: Calculator) => void | TCalcNumber,
    initValue?: number
  ): TCalcNumber;

  add(value: TCalcNumber): Calculator;
  sub(value: TCalcNumber): Calculator;
  mut(value: TCalcNumber): Calculator;
  div(value: TCalcNumber): Calculator;
  getCurrValue(): number;
  valueOf(): number;
}
