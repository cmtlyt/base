export declare function getRandomString(len?: number): string;

export declare function createLinkByScript(resource: string): string;

export interface ICookieOptions {
  duration?: number;
  expires?: string | Date;
  domain?: string;
}

export declare function generateCookieInfo(options: ICookieOptions): string;

export declare function generateClassName(
  ...args: (string | string[] | Record<string, boolean>)[]
): string;

export declare const gc: typeof generateClassName;
