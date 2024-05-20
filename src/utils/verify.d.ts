export declare function isNull(value: any): boolean;

export declare function isNaN(value: any): boolean;

export declare function isNumber(value: any): boolean;

export declare function isPromise(value: any): boolean;

export declare function getType(value: any): string;

export declare function isEmpty(value: any): boolean;

/**
 * #### 只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险
 */
export declare function isFile(value: any): boolean;

/**
 * #### 只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险
 */
export declare function isBlob(value: any): boolean;

export declare function isHttpUrlString(value: any): boolean;

export declare function isHttpsUrlString(value: any): boolean;

export declare function isBlobUrlString(value: any): boolean;

export declare function isDataUrlString(value: any): boolean;

/**
 * #### 只测试过非嵌套页面, 使用 iframe 嵌套的页面存在一定风险
 */
export declare function isUrl(value: any): boolean;

export declare function isTrue(value: any): boolean;

export declare function isFalse(value: any): boolean;

/**
 * #### 该方法存在生产环境和开发环境结果不一致风险, 请谨慎使用, 例如使用 babel 转换后 async 函数会变成普通函数
 */
export declare function isAsyncFunc(value: any): boolean;
