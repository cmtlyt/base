type TAnyFunc = (...args: any[]) => any;

type TArgsType<F> = F extends (...args: infer T) => any ? T : any[];
