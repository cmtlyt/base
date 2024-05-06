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

export declare class DefaultStoreController {
  static getInstance(): DefaultStoreController;

  private itemTotal: number;
  private pool: any[];

  constructor(initValue?: any);

  private getId: () => number;

  public save: (data: any) => number;
  public get: (id: number) => any;
  public delete: (id: number) => void;
  public clear: () => void;
  public pop: (id: number) => any;
}

export declare function createStorePool<T extends IStoreController>(
  controller: T
): IStorePoolHandle;
