export interface IStoreController {
  save: (data: any) => number;
  get: (id: number) => any;
  delete: (id: number) => void;
  clear: () => void;
  pop: (id: number) => any;
}

interface IStorePoolHandle {
  save: (value: any) => number;
  get: (id: number) => any;
  delete: (id: number) => void;
  clear: () => void;
  pop: (id: number) => any;
  on: (type: string, listener: Function) => Function;
  off: (type: string, listener: Function) => void;
  once: (type: string, listener: Function) => Function;
  clearEvent: (type: string) => void;
  clearEvents: () => void;
}

export declare function createStorePool<T extends IStoreController>(
  controller: T
): IStorePoolHandle;
