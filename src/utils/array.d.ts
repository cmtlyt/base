export declare function getArray<T>(value: T): T extends any[] ? T : T[];

export declare function getArraySlice<T extends any[]>(
  array: T,
  size: number
): T[];
