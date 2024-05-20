# 缓存相关方法

## cacheByReturn

缓存函数返回值

**类型声明**

```ts
type TAnyFunc = (...args: any[]) => any;
type TCacheByReturnType<
  F extends () => any,
  R = ReturnType<F>
> = R extends TAnyFunc ? R : () => R;

function cacheByReturn<F extends () => any>(
  cacheLoad: F
): TCacheByReturnType<F>;
```

**参数**

| 必填 | 参数      | 说明         | 类型 | 默认值 |
| :--: | --------- | ------------ | ---- | ------ |
|  \*  | cacheLoad | 缓存加载函数 | F    | -      |

**返回值**: `TCacheByReturnType<F>`

**示例**

```ts
import { cacheByReturn } from '@ali/ecsf-utils';
const cacheLoad = () => {
  console.log('cacheLoad');
  return 'hello world';
};
const cachedLoad = cacheByReturn(cacheLoad);
console.log(cachedLoad()); // cacheLoad \n hello world
console.log(cachedLoad()); // hello world
```

## memoize

缓存函数

**类型声明**

```ts
function memoize<F extends TAnyFunc>(
  func: F,
  resolver?: (...args: TArgsType<F>) => any
): F;
```

**参数**

| 必填 | 参数     | 说明         | 类型 | 默认值 |
| :--: | -------- | ------------ | ---- | ------ |
|  \*  | func     | 缓存加载函数 | F    | -      |
|      | resolver | 缓存解析函数 | F    | -      |

**返回值**: `F`

**示例**

```ts
import { memoize } from '@cmtlyt/base';
// import { memoize } from '@cmtlyt/base/utils/cache';

const fn = (a: number, b: number) => {
  console.log('fn');
  return a + b;
};
const memoizedFn = memoize(fn);
memoizedFn(1, 2); // fn \n 3
memoizedFn(1, 2); // 3
memoizedFn(1, 2); // 3
memoizedFn(2, 2); // fn \n 4
memoizedFn(2, 2); // 4
memoizedFn(1, 3); // fn \n 4
memoizedFn(1, 3); // 4
```
