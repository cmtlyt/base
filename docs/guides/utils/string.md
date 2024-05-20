# 字符串相关方法

## getRandomString

获取指定长度的随机字符串

**类型声明**

```ts
function getRandomString(len?: number): string;
```

**参数**

| 必填 | 参数 | 说明       | 类型   | 默认值 |
| :--: | ---- | ---------- | ------ | ------ |
|      | len  | 字符串长度 | number | 8      |

**返回值**: `string`

**示例**

```js
import { getRandomString } from '@cmtlyt/base';
// import { getRandomString } from '@cmtlyt/base/utils/string'

const str = getRandomString(10);
console.log(str); // a8sdf9aqw1
```

## createLinkByString

将传入的字符串转化为 `blob` 地址

**类型声明**

```ts
function createLinkByString(resource: string): string;
```

**参数**

| 必填 | 参数     | 说明     | 类型   | 默认值 |
| :--: | -------- | -------- | ------ | ------ |
|  \*  | resource | 资源内容 | string | -      |

**返回值**: `string`

**示例**

```js
import { createLinkByString } from '@cmtlyt/base';
// import { createLinkByString } from '@cmtlyt/base/utils/string'

const blobUrl = createLinkByString('console.log("hello world")');
console.log(blobUrl); // blob:https://xxxx
```

## generateCookieInfo

生成 cookie 信息

**类型声明**

```ts
interface ICookieOptions {
  duration?: number;
  expires?: string | Date;
  domain?: string;
  maxAge?: number;
  path?: string;
}

function generateCookieInfo(options: ICookieOptions): string;
```

**参数**

| 必填 | 参数    | 说明        | 类型           | 默认值 |
| :--: | ------- | ----------- | -------------- | ------ |
|      | options | cookie 配置 | ICookieOptions | \{}    |

**返回值**: `string`

**示例**

```js
import { generateCookieInfo } from '@cmtlyt/base';
// import { generateCookieInfo } from '@cmtlyt/base/utils/string'

const cookieInfo = generateCookieInfo({
  duration: 10,
  expires: '2023-12-25',
  domain: 'example.com',
  maxAge: 10,
  path: '/',
});
console.log(cookieInfo); // "expires=Fri, 25 Dec 2023 00:00:00 GMT;domain=example.com;max-age=10;path=/"
```

## generateClassName

生成 className

**类型声明**

```ts
function generateClassName(
  ...args: (string | string[] | Record<string, boolean>)[]
): string;

const gc: typeof generateClassName;
```

**参数**

| 必填 | 参数 | 说明 | 类型                                        | 默认值 |
| :--: | ---- | ---- | ------------------------------------------- | ------ |
|  \*  | args | 类名 | string\|string\[]\|Record\<string, boolean> | -      |

**返回值**: `string`

**示例**

```js
import { generateClassName, gc } from '@cmtlyt/base';
// import { generateClassName, gc } from '@cmtlyt/base/utils/string'

const className = generateClassName('a', 'b', { c: true }, [
  'd',
  { e: false, f: true },
]);
const className2 = gc('a', 'b', { c: true }, ['d', { e: false, f: true }]);
console.log('className:', className); // className: "a b c d f"
console.log('className2:', className2); // className2: "a b c d f"
```

## asyncReplace

异步替换

**类型声明**

```ts
function asyncReplace(
  str: string,
  pattern: string | RegExp,
  replacer:
    | ((match: string, ...args: any[]) => Promise<string> | string)
    | string
): Promise<string>;
```

**参数**

| 必填 | 参数     | 说明     | 类型                                                         | 默认值 |
| :--: | -------- | -------- | ------------------------------------------------------------ | ------ |
|  \*  | str      | 字符串   | string                                                       | -      |
|  \*  | pattern  | 正则     | string\|RegExp                                               | -      |
|  \*  | replacer | 替换函数 | (match: string, ...args: any[]) => Promise<string> \| string | -      |

**返回值**: `Promise<string>`

**示例**

```js
import { asyncReplace } from '@cmtlyt/base';
// import { asyncReplace } from '@cmtlyt/base/utils/string'

asyncReplace('hello world', 'world', async (match) => {
  return '@cmtlyt/base';
}); // hello @cmtlyt/base
```
