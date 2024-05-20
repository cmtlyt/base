type TCacheByReturnType<
  F extends () => any,
  R = ReturnType<F>
> = R extends TAnyFunc ? R : () => R;

export declare function cacheByReturn<F extends () => any>(
  cacheLoad: F
): TCacheByReturnType<F>;

export declare function memoize<F extends TAnyFunc>(
  func: F,
  resolver: (...args: TArgsType<F>) => any
): F;
