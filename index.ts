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
//   url: 'http://localhost:3000/upload',
//   chunkSize: 3,
//   maxConcurrent: 2,
//   retryCount: 0,
//   async bodyHandler({ chunk, chunkIdx, customOption }) {
//     console.log(chunkIdx, chunk, await chunk.text(), customOption);
//     return {
//       randomId: Math.random().toString(36).slice(2),
//     };
//   },
// });

// uploader
//   .upload(createLinkByString(`测试测试测试`), {
//     onProgress: (e) => {},
//     customOption: {
//       randomId: getRandomString(),
//     },
//   })
//   .then((res) => {
//     console.log(1, res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

// uploader
//   .upload(createLinkByString(`测试测试测试`), {
//     onProgress: (e) => {},
//     customOption: {
//       randomId: getRandomString(),
//     },
//   })
//   .then((res) => {
//     console.log(2, res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

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
