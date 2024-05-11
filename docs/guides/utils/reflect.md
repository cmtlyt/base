# 反射相关方法

## apply

调用函数

**类型声明**

```ts
function apply<R>(
  target: (...args: any[]) => R,
  thisArg: any,
  argArray?: any[]
): R;
```

**参数**

| 必填 | 参数     | 说明     | 类型                  | 默认值 |
| :--: | -------- | -------- | --------------------- | ------ |
|  \*  | target   | 目标函数 | (...args: any[]) => T | -      |
|      | thisArg  | this     | any                   | -      |
|      | argArray | 参数     | any[]                 | -      |

**返回值**: 传入函数的返回值

**示例**

```ts
apply(() => 1, null, [1, 2, 3]); // 1
apply(Math.max, null, [1, 2, 3]); // 3
apply(
  function () {
    return this.a;
  },
  { a: 1 }
); // 1
```

## construct

调用构造函数

**类型声明**

```ts
function construct<R>(
  target: new (...args: any[]) => R,
  argArray?: any[],
  newTarget?: any
): R;
```

**参数**

| 必填 | 参数      | 说明       | 类型                      | 默认值 |
| :--: | --------- | ---------- | ------------------------- | ------ |
|  \*  | target    | 目标函数   | new (...args: any[]) => T | -      |
|      | argArray  | 参数       | any[]                     | -      |
|      | newTarget | 新构造函数 | any                       | -      |

**返回值**: 传入构造函数的实例

**示例**

```ts
construct(Array, [1, 2, 3]); // [1, 2, 3]
construct(Date, ['2023-12-25']); // 2023-12-25T00:00:00.000Z
construct(
  class {
    constructor(a: number, b: number) {
      this.a = a;
      this.b = b;
    }
  },
  [1, 2]
); // { a: 1, b: 2 }
```

## defineProperty

定义属性
**类型声明**

```ts
function defineProperty<T extends object>(
  target: T,
  propertyKey: keyof T,
  attributes: PropertyDescriptor & ThisType<T[keyof T]>
): boolean;
```

**参数**

| 必填 | 参数        | 说明       | 类型                                      | 默认值 |
| :--: | ----------- | ---------- | ----------------------------------------- | ------ |
|  \*  | target      | 目标对象   | object                                    | -      |
|  \*  | propertyKey | 属性名     | keyof T                                   | -      |
|  \*  | attributes  | 属性描述符 | PropertyDescriptor & ThisType<T[keyof T]> | -      |

:::details 类型补充

**attributes**

```ts
interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}
```

:::

**返回值**: 是否成功

**示例**

```ts
defineProperty({}, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
}); // true
defineProperty({}, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
}); // true
```

## deleteProperty

删除属性

**类型声明**

```ts
function deleteProperty<T extends object>(
  target: T,
  propertyKey: keyof T
): boolean;
```

**参数**

| 必填 | 参数        | 说明     | 类型    | 默认值 |
| :--: | ----------- | -------- | ------- | ------ |
|  \*  | target      | 目标对象 | object  | -      |
|  \*  | propertyKey | 属性名   | keyof T | -      |

**返回值**: 是否成功

**示例**

```ts
deleteProperty({}, 'a'); // true
deleteProperty({}, 'a'); // false
```

## get

获取属性
**类型声明**

```ts
function get<T extends object>(
  target: T,
  propertyKey: keyof T,
  receiver?: any
): T[keyof T];
```

**参数**

| 必填 | 参数        | 说明     | 类型    | 默认值 |
| :--: | ----------- | -------- | ------- | ------ |
|  \*  | target      | 目标对象 | object  | -      |
|  \*  | propertyKey | 属性名   | keyof T | -      |
|      | receiver    | 接收者   | any     | -      |

**返回值**: 属性值

**示例**

```ts
get({}, 'a'); // undefined
get({ a: 1 }, 'a'); // 1
get(
  {
    get a() {
      return 1;
    },
  },
  'a'
); // 1
```

## getOwnPropertyDescriptor

获取属性描述符

**类型声明**

```ts
function getOwnPropertyDescriptor<T extends object, P extends keyof T>(
  target: T,
  propertyKey: P
): TypedPropertyDescriptor<T[P]> | undefined;
```

**参数**

| 必填 | 参数        | 说明     | 类型    | 默认值 |
| :--: | ----------- | -------- | ------- | ------ |
|  \*  | target      | 目标对象 | object  | -      |
|  \*  | propertyKey | 属性名   | keyof T | -      |

**返回值**: 属性描述符

**示例**

```ts
getOwnPropertyDescriptor({}, 'a'); // undefined
getOwnPropertyDescriptor({ a: 1 }, 'a'); // { value: 1, writable: true, enumerable: true, configurable: true }
```

## getPrototypeOf

获取原型

**类型声明**

```ts
function getPrototypeOf<T>(target: T): T;
```

**参数**

| 必填 | 参数   | 说明     | 类型   | 默认值 |
| :--: | ------ | -------- | ------ | ------ |
|  \*  | target | 目标对象 | object | -      |

**返回值**: 原型

**示例**

```ts
getPrototypeOf({}); // Object.prototype
getPrototypeOf(Object.create(null)); // null
getPrototypeOf(class {}); // Function.prototype
```

## has

判断属性是否存在

**类型声明**

```ts
function has<T extends object>(target: T, propertyKey: keyof T): boolean;
```

**参数**

| 必填 | 参数        | 说明     | 类型    | 默认值 |
| :--: | ----------- | -------- | ------- | ------ |
|  \*  | target      | 目标对象 | object  | -      |
|  \*  | propertyKey | 属性名   | keyof T | -      |

**返回值**: 是否存在

**示例**

```ts
has({}, 'a'); // false
has({ a: 1 }, 'a'); // true
```

## isExtensible

判断是否可扩展

**类型声明**

```ts
function isExtensible<T>(target: T): boolean;
```

**参数**

| 必填 | 参数   | 说明     | 类型   | 默认值 |
| :--: | ------ | -------- | ------ | ------ |
|  \*  | target | 目标对象 | object | -      |

**返回值**: 是否可扩展

**示例**

```ts
isExtensible({}); // true
isExtensible(Object.preventExtensions({})); // false
```

## ownKeys

获取所有属性名

**类型声明**

```ts
function ownKeys<T extends object>(target: T): (keyof T)[];
```

**参数**

| 必填 | 参数   | 说明     | 类型   | 默认值 |
| :--: | ------ | -------- | ------ | ------ |
|  \*  | target | 目标对象 | object | -      |

**返回值**: 属性名数组

**示例**

```ts
ownKeys({}); // []
ownKeys({ a: 1 }); // ['a']
ownKeys(Object.create(null)); // []
```

## preventExtensions

禁止扩展

**类型声明**

```ts
function preventExtensions<T extends object>(target: T): boolean;
```

**参数**

| 必填 | 参数   | 说明     | 类型   | 默认值 |
| :--: | ------ | -------- | ------ | ------ |
|  \*  | target | 目标对象 | object | -      |

**返回值**: 是否成功

**示例**

```ts
preventExtensions({}); // true
```

## set

设置属性

**类型声明**

```ts
function set<T extends object>(
  target: T,
  propertyKey: keyof T,
  value: any,
  receiver?: any
): boolean;
```

**参数**

| 必填 | 参数        | 说明     | 类型    | 默认值 |
| :--: | ----------- | -------- | ------- | ------ |
|  \*  | target      | 目标对象 | object  | -      |
|  \*  | propertyKey | 属性名   | keyof T | -      |
|  \*  | value       | 属性值   | any     | -      |
|      | receiver    | 接收者   | any     | -      |

**返回值**: 是否成功

**示例**

```ts
set({}, 'a', 1); // true
set({}, 'a', 1); // true
```

## setPrototypeOf

设置原型

**类型声明**

```ts
function setPrototypeOf<T>(target: T, proto: any): boolean;
```

**参数**

| 必填 | 参数   | 说明     | 类型   | 默认值 |
| :--: | ------ | -------- | ------ | ------ |
|  \*  | target | 目标对象 | object | -      |
|  \*  | proto  | 原型     | any    | -      |

**返回值**: 是否成功

**示例**

```ts
setPrototypeOf({}, {}); // true
setPrototypeOf({}, null); // true
setPrototypeOf(Object.create(null), {}); // true
setPrototypeOf(class {}, {}); // true
```
