# 其他方法

## deepClone

深拷贝

**类型声明**

```ts
function deepClone<T>(obj: T): T;
```

**参数**

| 必填 | 参数 | 说明   | 类型 | 默认值 |
| :--: | ---- | ------ | ---- | ------ |
|      | obj  | 任意值 | T    |        |

**返回值**: `T`

**示例**

```ts
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj2 = deepClone(obj);
obj2.a = 2;
obj2.b.c = 3;
console.log(obj.a); // 1
console.log(obj.b.c); // 2
```

## merge

合并对象

**类型声明**

```ts
export declare function merge<T>(target: T, ...source: any[]): T;
```

**参数**

| 必填 | 参数      | 说明         | 类型  | 默认值 |
| :--: | --------- | ------------ | ----- | ------ |
|  \*  | target    | 合并的目标   | T     |        |
|      | ...source | 合并数据来源 | any[] |        |

**返回值**: `T`

**示例**

```ts
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj2 = merge(obj, {
  a: 2,
  b: {
    c: 3,
  },
});
console.log(obj2.a); // 2
console.log(obj2.b.c); // 3
console.log(obj === obj2); // true
```

## cloneMerge

深拷贝合并对象

**类型声明**

```ts
export declare function cloneMerge<T>(target: T, ...source: any[]): T;
```

**参数**

| 必填 | 参数      | 说明         | 类型  | 默认值 |
| :--: | --------- | ------------ | ----- | ------ |
|  \*  | target    | 合并的目标   | T     |        |
|      | ...source | 合并数据来源 | any[] |        |

**返回值**: `T`

**示例**

```ts
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj2 = cloneMerge(obj, {
  a: 2,
  b: {
    c: 3,
  },
});
console.log(obj2.a); // 2
console.log(obj2.b.c); // 3
console.log(obj === obj2); // false
```
