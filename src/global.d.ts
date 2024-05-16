interface IClConfig {
  disableWarning: boolean;
  [key: string]: any;
}

declare interface Window {
  __ClConfig__: IClConfig;
}
