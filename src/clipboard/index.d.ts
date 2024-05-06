interface IClipboard {
  copy: (text: string) => void;
  paste: () => Promise<string>;
  clear: () => void;
  isCopyable: boolean;
  isPasteable: boolean;
  isClearable: boolean;
}

export declare const clipboard: IClipboard;
