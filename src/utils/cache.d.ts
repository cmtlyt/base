type TCacheByReturnType<
  F extends () => any,
  R = ReturnType<F>
> = R extends TAnyFunc ? R : () => R;

export declare function cacheByReturn<F extends () => any>(
  cacheLoad: F
): TCacheByReturnType<F>;
