# @cmtlyt/base

## 更新日志

### 日志标识总览

- (O) 对象
- (D) 目录
- (F) 函数
- (I) 接口
- (CV) 常量
- -> 别名

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