export declare function cacheByReturn<F extends () => any>(
  cacheLoad: F
): ReturnType<F>;
