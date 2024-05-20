interface IUploadControllerOptions {
  url: string;
  maxConcurrent?: number;
  concurrentNode?: 'chunk' | 'file';
  chunkSize?: number;
  dataType?: 'FormData' | 'binary';
  dataKey?: string;
  responseType?: 'json' | 'string';
  retryCount?: number;
  requestMethod?: 'POST' | 'PUT';
  headers?: Record<string, string>;
  requestOptions?: RequestInit;
  /**
   * # 禁止使用闭包！！！
   */
  headersHandler?: (body: {
    chunkIdx: number;
    currentHeanders: Record<string, any>;
    customOption: any;
  }) => Record<string, any> | Promise<Record<string, any>>;
  /**
   * # 禁止使用闭包！！！
   */
  bodyHandler?: (body: {
    chunk: Blob;
    chunkIdx: number;
    customOption: any;
  }) => Record<string, any> | Promise<Record<string, any>>;
}

interface IUploadFinishInfo {
  status: 'finished';
  message: string;
  chunks: number[];
  errorChunks: number[];
}

interface IUploadResult {
  taskInfo: IUploadFinishInfo;
  taskStatus: 'success' | 'error';
  errorChunks: number[];
  customOption: any;
}

interface IProgressInfo {
  status: 'success' | 'fail' | 'error';
  chunkIdx: number;
  response: any;
}

interface IUploadOptions {
  onProgress?: (progressInfo: IProgressInfo) => void;
  customOption?: any;
}

type TFileLive = File | Blob | string;

declare class UploadController {
  constructor(options: IUploadControllerOptions);

  upload(file: TFileLive, options?: IUploadOptions): Promise<IUploadResult>;
  retry(
    file: TFileLive,
    chunkIdxs?: number[],
    options?: IUploadOptions
  ): Promise<IUploadResult>;
  abort(file: TFileLive): void;
  clear(): void;
  close(): void;
}

export declare function createUploader(
  options: IUploadControllerOptions,
  forceCreate?: boolean
): UploadController;
