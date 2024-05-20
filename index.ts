// import { merge, cloneMerge } from './src';

// const a = {};

// const b = merge(a, { b: 1 }, { c: 2 }, { d: { e: 1, f: [1, 2, 4, { g: 5 }] } });

// console.log(a, b, a === b);

// import { createPool } from './dist';

// const p = createPool((i) => ({
//   number: i,
// }));

// p.get().then((item) => {
//   const { data } = item;
//   console.log(item, data(), item.data());
//   item.unUse();
//   console.log(item.data());
// });

// import { asyncReplace, sleep } from './src';

// asyncReplace('123', /\d/g, async (...args) => {
//   console.log(args);
//   await sleep(1000);
//   return '2';
// }).then(console.log);

// import { chunkTask, apply, isAsyncFunc } from './dist';

// console.log(isAsyncFunc(async () => {})); // true
// console.log(isAsyncFunc(() => {})); // false
// console.log(isAsyncFunc(async function () {})); // true

// // @ts-ignore
// window.__ClConfig__.disableWarning = true;

// console.log(isAsyncFunc(function () {})); // false
// console.log(isAsyncFunc(class {})); // false
// console.log(isAsyncFunc(Promise.resolve())); // false
// console.log(isAsyncFunc({ then() {} })); // false

// const run = chunkTask<number>((i) => {
//   const dom = document.createElement('div');
//   dom.innerHTML = i.toString();
//   document.body.prepend(dom);
//   return Promise.resolve(i);
// });

// console.time('run chunk task');
// run<number[]>(Array.from({ length: 100 }, (_, i) => i + Math.random())).then(
//   (res) => {
//     console.timeEnd('run chunk task');
//     console.log(res);
//   }
// );

// const num = apply(
//   function (a, b, c, d) {
//     return a + b + c + d + this.e;
//   },
//   { e: 5 },
//   [1, 2, 3, 4]
// );

// console.log(num);

// import { getCallStack } from './dist';

// function test() {
//   console.log(getCallStack());
// }

// function a() {
//   test();
// }

// function b() {
//   a();
// }

// function c() {
//   b();
// }

// function d() {
//   c();
// }

// function e() {
//   d();
// }

// function f() {
//   e();
// }

// function g() {
//   f();
// }

// function h() {
//   g();
// }

// function i() {
//   h();
// }

// function j() {
//   i();
// }

// j();

// import { createPool } from './src/createPool';

// const pool = createPool(() => []);

// (async () => {
//   const item = await pool.get();
//   console.log(item);
//   const {} = item;
// })();

// const flag = true;

// const oarr = [1, 2];

// const baseArr = [];

// // @ts-ignore
// baseArr[Symbol.iterator] = () => {
//   return {
//     next() {
//       return {
//         done: false,
//         value: 1,
//       };
//     },
//   };
// };

// const [ba, bb] = baseArr;

// console.log(baseArr, ba, bb);

// const arr = new Proxy([], {
//   get(target, p, receiver) {
//     if (p === Symbol.iterator) {
//       return oarr[Symbol.iterator];
//     }
//     if (p === '1' || p === '0') {
//       return oarr[p];
//     }
//     return Reflect.get(target, p, receiver);
//   },
// });

// const [a, b] = arr;

// console.log(a, b, arr[0], arr[1]);

// import {
//   createUploader,
//   createLinkByString,
//   createWorkerFunc,
//   getRandomString,
// } from './src';

// // const { run } = createWorkerFunc(
// //   (a, p: number, ...c: string[]) => {
// //     console.log(a, p, c);
// //   },
// //   [],
// //   {
// //     needPost: true,
// //   }
// // );

// // run(1);

// const uploader = createUploader({
//   url: 'http://localhost:3000/binary',
//   chunkSize: 3,
//   maxConcurrent: 2,
//   concurrentNode: 'chunk',
//   retryCount: 0,
//   dataType: 'binary',
//   responseType: 'string',
//   headersHandler(body) {
//     // console.log(body);
//     return { test: 1 };
//   },
//   async bodyHandler({ chunk, chunkIdx, customOption }) {
//     console.log(chunkIdx, chunk, await chunk.text(), customOption);
//     return {
//       randomId: Math.random().toString(36).slice(2),
//     };
//   },
// });

// for (let i = 0; i < 4; ++i) {
//   uploader
//     .upload(createLinkByString(`测试测试测试`), {
//       onProgress: (e) => {
//         console.log(e);
//       },
//       customOption: {
//         randomId: getRandomString(),
//       },
//     })
//     .then((res) => {
//       console.log(res.customOption.randomId, res);
//     })
//     .catch((res) => {
//       console.log(res);
//     });
// }

// let key: any = {};
// const map = new WeakMap();

// map.set(key, {
//   valueOf() {
//     console.log('valueOf');
//     return 1;
//   },
// });

// const data = map.get(key);

// console.log(data);

// setTimeout(() => {
//   key = null;
//   console.log(data);
// });
