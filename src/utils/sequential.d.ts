export declare function debounce<F extends (...args: any[]) => any>(
  func: F,
  time: number,
  immediately: boolean
): (...args: TArgsType<F>) => void;

export declare const throttle: typeof debounce;
