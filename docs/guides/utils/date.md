# 时间相关

## getNow

获取当前时间, 支持 `performance API` 的浏览器会返回 `performance.now`, 不支持的浏览器会返回 `Date.now`

**类型声明**

```ts
getNow(): number
```

**返回值**: `number`

**示例**

```ts
import { getNow } from '@cmtlyt/base';
// import { getNow } from '@cmtlyt/base/utils/date';

getNow(); // 1692889934
getNow(); // 1692889935
getNow(); // 1692889936
getNow(); // 1692889937
```
