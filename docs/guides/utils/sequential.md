# 时序相关方法

### debounce

函数防抖

**类型声明**

```ts
type TArgsType<F> = F extends (...args: infer T) => any ? T : never;

function debounce<F extends (...args: any[]) => any>(
  func: F,
  time?: number,
  immediately?: boolean
): (...args: TArgsType<F>) => void;
```

**参数**

| 必填 | 参数名 | 说明 | 类型 | 默认值 |
| :-: | --- | --- | --- | --- |
| * | func | 要防抖的函数 | F | - |
|  | time | 防抖时间，默认为 100ms | number | 100 |
|  | immediately | 是否立即执行，默认为 false | boolean | false |

**返回值**: `(...args: TArgsType<F>) => void`

**示例**

```ts
import { debounce } from '@cmtlyt/base'
// import { debounce } from '@cmtlyt/base/utils/sequential'

const fn = debounce(() => {
  console.log('hello');
}, 1000);

fn();
fn();
fn();
fn(); // hello

setTimeout(() => {
  fn(); // hello
}, 1500);
```

### throttle

函数节流

**类型声明**

```ts
type TArgsType<F> = F extends (...args: infer T) => any ? T : never;

function throttle<F extends (...args: any[]) => any>(
  func: F,
  time?: number,
  immediately?: boolean
): (...args: TArgsType<F>) => void;
```

**参数**

| 必填 | 参数名 | 说明 | 类型 | 默认值 |
| :-: | --- | --- | --- | --- |
| * | func | 要节流的函数 | F | - |
|  | time | 节流时间，默认为 100ms | number | 100 |
|  | immediately | 是否立即执行，默认为 true | boolean | true |

**返回值**: `(...args: TArgsType<F>) => void`

**示例**

```ts
import { throttle } from '@cmtlyt/base'
// import { throttle } from '@cmtlyt/base/utils/sequential'

const fn = throttle(() => {
  console.log('hello');
}, 1000);

fn(); // hello
fn();
fn();
fn();

setTimeout(() => {
  fn(); // hello
}, 1500);
```