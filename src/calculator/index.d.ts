export declare class Calculator {
  private result: number;
  private last: number;

  constructor(initValue?: number);

  static group(
    func: (calc: Calculator) => void | Calculator | number,
    initValue?: number
  ): Calculator | number;
  public add(value: number): Calculator;
  public sub(value: number): Calculator;
  public mut(value: number): Calculator;
  public div(value: number): Calculator;
  public valueOf(): number;
}
