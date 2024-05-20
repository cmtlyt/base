export declare function getRandomString(len?: number): string;

export declare function createLinkByString(resource: string): string;

export interface ICookieOptions {
  duration?: number;
  expires?: string | Date;
  domain?: string;
  maxAge?: number;
  path?: string;
}

export declare function generateCookieInfo(options: ICookieOptions): string;

export declare function generateClassName(
  ...args: (string | string[] | Record<string, boolean>)[]
): string;

export declare const gc: typeof generateClassName;

export declare function asyncReplace(
  str: string,
  pattern: string | RegExp,
  replacer:
    | ((match: string, ...args: any[]) => Promise<string> | string)
    | string
): Promise<string>;
