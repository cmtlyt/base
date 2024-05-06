interface IWorkerFuncs<F extends TAnyFunc> {
  run: (...args: TArgsType<F>) => Promise<ReturnType<F>>;
  dispose: () => void;
}

declare function generateWorkerScript<F extends TAnyFunc>(
  func: F,
  importScripts?: string[]
): string;

declare function createWorker(scriptUrl: string): Worker;

declare function createWorkerFuncs<F extends TAnyFunc>(
  scriptUrl: string
): IWorkerFuncs<F>;

declare const createOnceWorkerFuncs: typeof createWorkerFuncs;

export declare function createWorkerFunc<F extends TAnyFunc>(
  func: F,
  importScripts?: string[],
  reuse?: boolean
): IWorkerFuncs<F>;

export declare const useWorkerFunc: typeof createWorkerFunc;
