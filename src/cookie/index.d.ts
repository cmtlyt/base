import { ICookieOptions } from '../utils/string';

interface ICookieHandle {
  get: (key: string) => string | null;
  set: (key: string, value: string, options?: ICookieOptions) => void;
  remove: (key: string) => void;
}

export declare const cookie: ICookieHandle;
