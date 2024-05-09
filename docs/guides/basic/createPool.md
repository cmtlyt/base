# 池

## createPool - (function)

### 参数

| 必填 | 参数         | 说明                           | 类型             | 默认值    |
| :--: | ------------ | ------------------------------ | ---------------- | --------- |
|      | initFunction | 初始化函数                     | () => T          | ()=>EMPTY |
|      | size         | 初始大小                       | number           | 5         |
|      | poolId       | 唯一标识, 不传则直接创建新实例 | string \| symbol | ‘’        |

### 返回值

`Pool<T>` 实例

### 实例类型声明

```ts
interface IPoolItem<T> {
  data: T;
  unUse: () => void;
}

interface Pool<T = any> {
  // 可用数量
  usableCount: number;
  // 是否关闭
  isClose: boolean;

  // 取出
  get(): Promise<IPoolItem<T>>;
  // 放回/添加
  put(data: T): void;
  // 关闭
  close(callback: (data: T) => void): void;
}
```

:::danger 警告
`get` 返回的 `IPoolItem` 对象禁止解构和赋值，会影响管理

**示例**

```js
const item = await pool.get();
// 禁止解构或赋值
const data = item.data; // 🈲
const { data } = item; // 🈲
```

:::

## getPool - (function)

### 参数

| 必填 | 参数   | 说明     | 类型             | 默认值 |
| :--: | ------ | -------- | ---------------- | ------ |
|      | poolId | 唯一标识 | string \| symbol | ''     |

### 返回值

`Pool<T>` 实例

[实例类型声明](#实例类型声明)
