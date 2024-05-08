type ControllerFunc = (moduleId: any, ...args: any[]) => void;

type LoggerFunc = (moduleId: any, ...args: any[]) => Logger;

interface LogInfo {
  message: string;
  moduleId: any;
  method: string;
  date: Date;
  error: null | Error;
}

interface Controller {
  log: ControllerFunc;
  info: ControllerFunc;
  warn: ControllerFunc;
  error: ControllerFunc;
  debug: ControllerFunc;
  onOutput?: (logInfo: LogInfo) => void;
}

type MessageTemplateFunc = (
  data: any[],
  moduleId: ModuleId,
  method: string,
  date: Date
) => string | any[];

type IgnoreMessageFunc = (message: string) => boolean;

interface LoggerOptions {
  showModuleIds?: ModuleId[];
  showMethods?: string[];
  ignoreMessage?: string[] | IgnoreMessageFunc;
  messageTemplate?: string | MessageTemplateFunc;
  controller?: Controller;
}

interface Constant {
  moduleIdReg: RegExp;
  methodReg: RegExp;
  dateReg: RegExp;
  controllerMethods: string[];
  defaultController: Console;
  defaultMessageTemplate: string;
}

interface LoggerFuncMaps {
  log: LoggerFunc;
  info: LoggerFunc;
  warn: LoggerFunc;
  error: LoggerFunc;
  debug: LoggerFunc;
}

type ModuleId = unknown;

export declare class Logger {
  constructor(options?: LoggerOptions);

  public showMethods: string[];
  public showModuleIds: ModuleId[];
  public ignoreMessage: string[] | IgnoreMessageFunc;
  public messageTemplate: string | MessageTemplateFunc;
  public controller: Controller;

  private _removeIgnoreMessage<T>(args: T): T;
  private _checkOutputConditions(method: string, moduleId: ModuleId): boolean;
  private _formatOutputMessage(
    method: string,
    moduleId: ModuleId,
    date: Date,
    args: any[]
  ): any[];
  private _output(method: string, moduleId: ModuleId, args: any): void;
  private _onOutput(logInfo: LogInfo): void;

  public log: LoggerFunc;
  public info: LoggerFunc;
  public warn: LoggerFunc;
  public error: LoggerFunc;
  public debug: LoggerFunc;
  public getDeconstructableObject(): LoggerFuncMaps;
}
