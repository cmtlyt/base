# 缓存相关方法

### cacheByReturn

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

| 必填 | 参数 | 说明 | 类型 | 默认值 |
| :-: | --- | --- | --- | --- |
| * | cacheLoad | 缓存加载函数 | F | - |

**返回值**: `TCacheByReturnType<F>`

**示例**

```ts
import { cacheByReturn } from '@ali/ecsf-utils';
const cacheLoad = () => {
  console.log('cacheLoad')
  return 'hello world';
};
const cachedLoad = cacheByReturn(cacheLoad);
console.log(cachedLoad()); // cacheLoad \n hello world
console.log(cachedLoad()); // hello world
```
