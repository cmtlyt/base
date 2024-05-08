import { createUploader, createLinkByString, createWorkerFunc } from './src';

const { run } = createWorkerFunc(
  (a, p: number, ...c: string[]) => {
    console.log(a, p, c);
  },
  [],
  {
    needPost: true,
  }
);

run(1);

const uploader = createUploader({
  url: 'http://localhost:3000/upload',
  chunkSize: 3,
  maxConcurrent: 2,
  retryCount: 2,
  async bodyHandler({ chunk, chunkIdx }) {
    console.log(chunkIdx, chunk, await chunk.text());
    return {
      randomId: Math.random().toString(36).slice(2),
    };
  },
});

uploader
  .upload(createLinkByString(`测试测试测试`), {
    onProgress: (e) => {
      console.log(e);
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
