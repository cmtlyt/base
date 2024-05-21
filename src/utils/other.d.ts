export declare function deepClone<T>(obj: T): T;

type TIsNever<T> = [T] extends [never] ? true : false;

type TGetNeverKeys<T, Keys extends keyof T = keyof T> = Keys extends infer K
  ? // @ts-ignore
    TIsNever<T[K]> extends true
    ? K
    : never
  : never;

type TGetRequired<T> = Omit<
  T,
  TGetNeverKeys<{
    [P in keyof T]-?: { [K in P]: T[P] } extends Required<{ [K in P]: T[P] }>
      ? T[P]
      : never;
  }>
>;

type TMerge<T, U> = TGetRequired<{
  [P in keyof T | keyof U]: P extends keyof T
    ? P extends keyof TGetRequired<T>
      ? T[P]
      : P extends keyof U
      ? U[P]
      : T[P]
    : P extends keyof U
    ? U[P]
    : never;
}>;

type TMergeList<T extends any[]> = T extends [infer H, ...infer R]
  ? R extends [infer I]
    ? TMerge<H, I>
    : TMerge<H, TMergeList<R>>
  : T['0'];

export declare function merge<T, S extends any[]>(
  target: T,
  ...source: S
): TMergeList<[T, ...S]>;

export declare function cloneMerge<T, S extends any[]>(
  target: T,
  ...source: S
): TMergeList<[T, ...S]>;
