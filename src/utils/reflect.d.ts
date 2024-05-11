export function apply<R>(
  target: (...args: any[]) => R,
  thisArg: any,
  argArray?: any[]
): R;

export function construct<R>(
  target: new (...args: any[]) => R,
  argArray?: any[],
  newTarget?: any
): R;

export function defineProperty<T extends object>(
  target: T,
  propertyKey: keyof T,
  attributes: PropertyDescriptor & ThisType<T[keyof T]>
): boolean;

export function deleteProperty<T extends object>(
  target: T,
  propertyKey: keyof T
): boolean;

export function get<T extends object>(
  target: T,
  propertyKey: keyof T,
  receiver?: any
): T[keyof T];

export function getOwnPropertyDescriptor<T extends object, P extends keyof T>(
  target: T,
  propertyKey: P
): TypedPropertyDescriptor<T[P]> | undefined;

export function getPrototypeOf<T>(target: T): T;

export function has<T extends object>(target: T, propertyKey: keyof T): boolean;

export function isExtensible<T>(target: T): boolean;

export function ownKeys<T extends object>(target: T): (keyof T)[];

export function preventExtensions<T extends object>(target: T): boolean;

export function set<T extends object>(
  target: T,
  propertyKey: keyof T,
  value: any,
  receiver?: any
): boolean;

export function setPrototypeOf<T>(target: T, proto: any): boolean;
