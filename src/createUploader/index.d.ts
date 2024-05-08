interface IUploadOptions {
  url: string;
  maxConcurrent?: number;
  chunkSize?: number;
  dataType?: 'FormData';
  dataKey?: string;
  responseType?: 'json' | 'string';
  retryCount?: number;
  requestMethod?: 'POST' | 'PUT';
  headers?: Record<string, string>;
  /**
   * # 禁止使用闭包！！！
   */
  bodyHandler?: (body: {
    chunk: Blob;
    chunkIdx: number;
  }) => Record<string, any>;
}

interface IUploadFinishInfo {
  status: 'finished';
  message: string;
  chunks: number[];
  errorChunks: number[];
}

interface IProgressInfo {
  status: 'success' | 'fail' | 'error';
  chunkIdx: number;
  response: any;
}

type TFileLive = File | Blob | string;

declare class UploadController {
  constructor(options: IUploadOptions);

  upload(
    file: TFileLive,
    options?: { onProgress?: (progressInfo: number) => void }
  ): Promise<IUploadFinishInfo>;
  retry(
    file: TFileLive,
    options?: {
      onProgress?: (progressInfo: number) => void;
      chunkIdxs?: number[];
    }
  ): void;
  abort(file: TFileLive): void;
  clear(): void;
  close(): void;
}

export declare function createUploader(
  options: IUploadOptions
): UploadController;
