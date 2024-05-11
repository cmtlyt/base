# @cmtlyt/base

> README 每次发包才会更新，如果需要看最新的更新日志或文档，请前往 homepage 查看

## 更新日志

### 日志标识总览

- (O) 对象
- (D) 目录
- (F) 函数
- (I) 接口
- (CV) 常量
- -> 别名

### v0.5.5

新增

- (D) utils
  - (F) apply
  - (F) construct
  - (F) defineProperty
  - (F) deleteProperty
  - (F) get
  - (F) getOwnPropertyDescriptor
  - (F) getPrototypeOf
  - (F) has
  - (F) isExtensible
  - (F) ownKeys
  - (F) preventExtensions
  - (F) set
  - (F) setPrototypeOf
- `createUploader` 支持用户自定义 `fetch` 参数

### v0.5.4

新增

- `createUploader` 新增 `concurrentNode` 配置, 用于配制并发上传的节点

### v0.5.3

新增

- `Logger` 新增 `getInstance` 静态方法

修改

- 部分类型修订
- 移除多余类型
- 移除 `createStorePool` 中的 `DefaultStoreController` 导出

### v0.5.2

新增

- (F) createPool
- (F) getPool

修复

- 部分类型修复

优化

- `createUploader` 使用 `createPool` 管理上传任务，并增加可配置参数

### v0.5.1

修复

- 修复 `isHttpUrlString` 无法识别 `//` 开头链接的问题

### v0.5.0

新增

- (F) createUploader
- (D) utils
  - (F) isFile
  - (F) isBlob
  - (F) isHttpUrlString
  - (F) isBlobUrlString
  - (F) isDataUrlString
  - (F) isUrl
  - (F) getArraySlice

修复

- `logger` 类型错误，及内部参数赋值错误
- `string` 模块类型修复
- 移除多余类型声明
- `createWorkerFunc` 类型完善

新增

- `createWorkerFunc` 监听用户自己发送的事件

备注

- 如果 `createWorkerFunc` 第三个参数的 `needPost` 配置项被设置为 `true` 后，会改变 `func` 的第一个参数为 `postMessage` 函数，如果需要使用，请注意！！！

### v0.4.2

新增

- (D) utils
  - (F) isEmpty

修复

- 大范围类型修复
- 修复 `pipe` 和 `compose` 写反了的问题

修改

- `generateCookieInfo` 增加可配置参数

### v0.4.1

新增

- (D) utils
  - (F) getType

修改

- `Calculator` 的 `valueOf` 方法改为计算器的等于运算符，并新增 `getCurrValue` 来获取当前值，但不计算最终结果

```js
// valueOf 会真实计算结果
const calc = new Calculator(1);
calc.add(1);
calc.valueOf(); // 2
calc.mut(2);
calc.valueOf(); // 4

// getCurrValue 不会真实计算结果
const calc2 = new Calculator(1);
calc2.add(1);
calc2.getCurrValue(); // 2;
calc2.mut(2);
calc2.valueOf(); // 3
```

修复

- 大范围类型修复

### v0.4.0

新增

- (F) curry
- (F) compose
- (F) pipe

警告

`compose` 和 `pipe` 类型存在缺陷，只能判断最后输入的函数是否满足条件，不能判断中间的函数
也就是说从前往后传入函数可以正确判断类型，但是如果是在中间插入函数就不行，而且对于柯理化后的函数，只能判断第一个参数的类型

### v0.3.3

修复

- [x] 修复 `clipboard.paste` 返回类型不统一问题

### v0.3.2

修复

- [x] 修复 `getArray` 类型提示中返回类型错误问题

### v0.3.1

修复

- [x] 修复调用 `getArray` 出现找不到 `isNull` 的问题

### v0.3.0

新增

- (O) cookie
  - (F) get
  - (F) set
  - (F) remove
- (D) utils
  - (F) generateCookieInfo
  - (F) generateClassName -> gc

### v0.2.0

新增

- (F) createStorePool
- (C) DefaultStoreController
- (I) IStoreController
- (C) EventEmitter
- (C) CustomEvent
- (O) clipboard
  - (F) copy
  - (F) paste
  - (F) clear
- (C) Calculator
- (D) utils
  - (F) debounce
  - (F) throttle
  - (F) isNumber
  - (F) isNaN
  - (F) isPromise

### v0.1.0

新增

- (F) createWorkerFunc
- (C) Logger
- (D) utils
  - (F) getArray
  - (F) cacheByReturn
  - (F) formatDate
  - (F) getRandomString
  - (F) createLinkByString
  - (F) isNull
- (CV) EMPTY
