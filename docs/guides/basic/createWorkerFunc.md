# 创建 Worker 函数

## createWorkerFunc - (function)

创建一个在 Worker 中运行的函数

### 参数

| 必填 | 参数名           | 说明                         | 类型                 | 默认值 |
| :--: | ---------------- | ---------------------------- | -------------------- | ------ |
|  \*  | func             | 要在 Worker 中运行的函数     | (...args:any[])=>any | -      |
|      | importScripts    | Worker 运行时需要加载的脚本  | string[]             | []     |
|      | options          | 选项                         | object               | {}     |
|      | options.reuse    | 是否复用 Worker              | boolean              | true   |
|      | options.needPost | 是否需要将所有参数打包为数组 | boolean              | false  |

:::danger 警告
`needPost` 为 `true` 时, `func` 的第一个参数会被替换为 `postMessage`, 用户自己的参数从形参列表第二项开始

---

**postMessage**

运行中返回中间结果

**参数**

| 必填 | 参数名 | 说明         | 类型 | 默认值 |
| :--: | ------ | ------------ | ---- | ------ |
|  \*  | data   | 要发送的数据 | any  | -      |

**返回值**

无
:::

---

### 返回值

| 类型         | 说明                                                               |
| ------------ | ------------------------------------------------------------------ |
| IWorkerFuncs | 包含了 `run` `dispose` `on` `remove` `clearOn` `onOnce` 方法的对象 |

#### run

运行函数

**参数**

| 必填 | 参数名  | 说明                       | 类型  | 默认值 |
| :--: | ------- | -------------------------- | ----- | ------ |
|  \*  | ...args | 和传入 func 相同的参数列表 | any[] | -      |

**返回值**

| 类型    | 说明                                     |
| ------- | ---------------------------------------- |
| Promise | func 的返回结果在 Promise 的 then 中接收 |

#### dispose

销毁 Worker

**参数**

无

**返回值**

无

:::warning 警告
下面的方法只有在 needPost 为 true 时才有效
:::

#### on

监听 postMessage 发送的消息

**参数**

| 必填 | 参数名   | 说明     | 类型                | 默认值 |
| :--: | -------- | -------- | ------------------- | ------ |
|  \*  | callback | 回调函数 | (data: any) => void | -      |

**返回值**

无

#### remove

移除监听

**参数**

| 必填 | 参数名   | 说明     | 类型     | 默认值 |
| :--: | -------- | -------- | -------- | ------ |
|  \*  | callback | 回调函数 | TAnyFunc | -      |

**返回值**

无

#### clearOn

清除所有监听

**参数**

无

**返回值**

无

#### onOnce

只监听一次

**参数**

| 必填 | 参数名   | 说明     | 类型                | 默认值 |
| :--: | -------- | -------- | ------------------- | ------ |
|  \*  | callback | 回调函数 | (data: any) => void | -      |

**返回值**

无
