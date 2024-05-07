type TCurry<P extends any[], R> = <T extends any[]>(
  ...args: TCast<T, Partial<P>>
) => TDropHead<TLength<T>, P> extends [any, ...any[]]
  ? TCurry<TCast<TDropHead<TLength<T>, P>, any[]>, R>
  : R;

type TCurryFunc = <P extends any[], R>(fn: (...args: P) => R) => TCurry<P, R>;

export declare const curry: TCurryFunc;

type TCurryFuncReturnType<F> = F extends TCurry<any, infer R>
  ? R
  : F extends TAnyFunc
  ? ReturnType<F>
  : any;

type TCompose<T extends TAnyFunc[]> = [
  ...any,
  any,
  TFunc<[TCurryFuncReturnType<TLastTwoArg<T>>]>
];

type TComposeFunc = <F extends TCompose<F>>(
  ...funcs: F
) => (
  ...args: Required<TArgsType<THeadType<F>>>
) => TCurryFuncReturnType<TLastType<F>>;

// todo 类型存在缺陷，只能判断最后输入的函数是否满足条件，不能判断中间的函数
export declare const compose: TComposeFunc;

type TPipe<T extends TAnyFunc[]> = [
  ...any,
  TFunc<[TCurryFuncReturnType<TLastType<T>>]>,
  any
];

type TPipeFunc = <F extends TPipe<F>>(
  ...funcs: F
) => (
  ...args: Required<TArgsType<TLastType<F>>>
) => TCurryFuncReturnType<THeadType<F>>;

// todo 类型存在缺陷，只能判断最后输入的函数是否满足条件，不能判断中间的函数
export declare const pipe: TPipeFunc;
