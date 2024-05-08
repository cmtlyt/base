type TFlatPromise<T> = T extends Promise<any> ? T : Promise<T>;

interface IWorkerFuncs<
  F extends TAnyFunc,
  A extends any[] = Parameters<F>,
  R = ReturnType<F>
> {
  run: (...args: A) => TFlatPromise<R>;
  dispose: () => void;
  on: <T>(callback: (data: T) => void) => void;
  remove: (callback: TAnyFunc) => void;
  clearOn: () => void;
  onOnce: <T>(callback: (data: T) => void) => void;
}

type TWorkerFunc = (postMessage: (data: any) => void, ...args: any[]) => any;

type TExcludeHead<T extends any[]> = T extends [any, ...infer L] ? L : T;

export declare function createWorkerFunc<F extends TWorkerFunc>(
  func: F,
  importScripts: string[],
  options: {
    reuse?: boolean;
    /**
     * ### 如果把 `needPost` 设置为 `true`，则会将 `func` 所有参数打包为数组放到第二个参数，然后设置第一个参数为 `postMessage`
     * ### 该方法用于中途返回数据，然后在 `on` 监听的回调入参中获取
     */
    needPost: true;
  }
): IWorkerFuncs<F, TExcludeHead<Parameters<F>>>;
export declare function createWorkerFunc<F extends TAnyFunc>(
  func: F,
  importScripts?: string[],
  options?: {
    reuse?: boolean;
    needPost?: boolean;
  }
): IWorkerFuncs<F>;
