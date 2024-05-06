export declare function getRandomString(len?: number): string;

export declare function createLinkByScript(resource: string): string;

export interface ICookieOptions {
  duration?: number;
  expires?: string | Date;
  domain?: string;
}

export declare function generateCookieInfo(options: ICookieOptions): string;
