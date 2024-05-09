export declare class CustomEvent {
  type: string;
  data: any;
  removeListenerFlag: boolean;
  removeListener: () => void;
}

type TCallback = (event: CustomEvent) => void;

export declare class EventEmitter {
  static getDetaultEmitter: () => EventEmitter;

  constructor();

  public on(eventName: string, callback: TCallback): EventEmitter;
  public off(eventName: string, callback: TCallback): EventEmitter;
  public emit(eventName: string, data: any): EventEmitter;
  public once(eventName: string, callback: TCallback): EventEmitter;
  public clear(eventName: string): EventEmitter;
  public clearAll(): EventEmitter;
  public getFuncMap(): {
    on(eventName: string, callback: TCallback): EventEmitter;
    off(eventName: string, callback: TCallback): EventEmitter;
    emit(eventName: string, event: CustomEvent): EventEmitter;
    once(eventName: string, callback: TCallback): EventEmitter;
    clear(eventName: string): EventEmitter;
    clearAll(): EventEmitter;
  };
}
