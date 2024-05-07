# @cmtlyt/base

## 更新日志

### 日志标识总览

- (O) 对象
- (D) 目录
- (F) 函数
- (I) 接口
- (CV) 常量
- -> 别名

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
