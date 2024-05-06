interface IClipboard {
  copy: (text: string) => void;
  paste: () => string;
  clear: () => void;
  isCopyable: boolean;
  isPasteable: boolean;
  isClearable: boolean;
}

export declare const clipboard: IClipboard;
