# 上传管理器

## createUploader - (function)

创建一个上传管理器

### 参数

| 必填 | 参数名        | 说明         | 类型                   | 默认值       |
| :--: | ------------- | ------------ | ---------------------- | ------------ |
|  \*  | url           | 上传地址     | string                 |              |
|      | maxConcurrent | 最大并发数   | number                 | 3            |
|      | chunkSize     | 分片大小     | number                 | 1024 \* 1024 |
|      | dataType      | 数据类型     | 'FormData'             | 'FormData'   |
|      | dataKey       | 数据 key     | string                 | 'file'       |
|      | responseType  | 响应类型     | 'json'                 | 'json'       |
|      | retryCount    | 重试次数     | number                 | 3            |
|      | requestMethod | 请求方法     | 'POST'                 | 'POST'       |
|      | headers       | 请求头       | Record<string, string> | {}           |
|      | bodyHandler   | 自定义请求体 | TBodyHanderFunc        | -            |

:::details 类型补充

```ts
type TBodyHanderFunc = (body: {
  chunk: Blob;
  chunkIdx: number;
  customOption: any;
}) => Record<string, any>;
```

:::

:::danger 警告
`TBodyHanderFunc` 禁止使用闭包
:::

### 返回值

`UploadController` 实例

#### 实例类型声明

```ts
type TFileLive = File | Blob | string;
interface IUploadOptions {
  onProgress?: (progressInfo: IProgressInfo) => void;
  customOption?: any;
}
interface IUploadResult {
  taskInfo: IUploadFinishInfo;
  customOption: any;
}
interface IUploadFinishInfo {
  status: 'finished';
  message: string;
  chunks: number[];
  errorChunks: number[];
}

interface UploadController {
  // 上传
  upload(file: TFileLive, options?: IUploadOptions): Promise<IUploadResult>;
  // 重试
  retry(
    file: TFileLive,
    chunkIdxs?: number[],
    options?: IUploadOptions
  ): Promise<IUploadResult>;
  // 取消
  abort(file: TFileLive): void;
  // 清空
  clear(): void;
  // 关闭
  close(): void;
}
```
