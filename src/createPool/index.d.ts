interface IPoolItem<T> {
  /**
   * ### 不建议对该属性进行解构和赋值，会影响管理
   *
   * ```
   * // 赋值（不建议！！！）
   * const data = item.data
   * // 解构（不建议！！！）
   * const { data } = item
   * ```
   */
  data: () => T;
  /**
   * ### 不建议对该属性进行解构和赋值，会影响管理
   *
   * ```
   * // 赋值（不建议！！！）
   * const unUse = item.unUse
   * // 解构（不建议！！！）
   * const { unUse } = item
   * ```
   */
  unUse: () => void;
}

declare class Pool<T = any> {
  usableCount: number;
  isClose: boolean;

  constructor(size: number, initFunction?: () => T, poolId?: string | symbol);

  /**
   * 不建议对返回值进行解构和赋值，会影响管理
   *
   * ```
   * // 赋值（不建议！！！）
   * const data = item.data
   * // 解构（不建议！！！）
   * const { data } = item
   * ```
   */
  get(): Promise<IPoolItem<T>>;
  put(data: T): void;
  close(callback: (data: T) => void): void;
}

export declare function createPool<T>(
  initFunction: (idx: number) => T,
  size?: number,
  poolId?: string | symbol
): Pool<T>;

export declare function getPool(poolId: string | symbol): Pool;
