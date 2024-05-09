# 数组相关方法

## getArray

参数归一化为数组

**类型声明**

```ts
function getArray<T>(value: T): T extends any[] ? T : T[];
```

**参数**

| 必填 | 参数  | 说明 | 类型 | 默认值 |
| :--: | ----- | ---- | ---- | ------ |
|      | value | 数组 | any  |        |

**返回值**: `array`

**示例**

```ts
import { getArray } from '@cmtlyt/base';
// import { getArray } from '@cmtlyt/base/utils/array';

const arr = getArray(1);
console.log(arr); // [1]
console.log(getArray([2])); // [2]
console.log(getArray()); // []
console.log(getArray({ a: 1 })); // [{ a: 1 }]
```

## getArraySlice

获取数组切片

**类型声明**

```ts
function getArraySlice<T extends any[]>(array: T, size: number): T[];
```

**参数**

| 必填 | 参数  | 说明     | 类型   | 默认值 |
| :--: | ----- | -------- | ------ | ------ |
|  \*  | array | 数组     | any[]  |        |
|      | size  | 切片大小 | number |        |

**返回值**: `array`

**示例**

```ts
import { getArraySlice } from '@cmtlyt/base';
// import { getArraySlice } from '@cmtlyt/base/utils/array';

const arr = getArraySlice([1, 2, 3, 4, 5], 2);
console.log(arr); // [[1, 2], [3, 4], [5]]
console.log(getArraySlice([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(getArraySlice([1, 2, 3, 4, 5], 6)); // [[1, 2, 3, 4, 5]]
```
