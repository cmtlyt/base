export declare function debounce<F extends (...args: any[]) => any>(
  func: F,
  time?: number,
  immediately?: boolean
): (...args: TArgsType<F>) => void;

export declare const throttle: typeof debounce;

export declare function chunkTask<
  T,
  F extends (arg: T) => any = (arg: T) => any
>(
  task: F
): <R extends TUnwrapPromise<ReturnType<F>>>(args: T[] | number) => Promise<R>;
