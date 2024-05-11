import path from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { glob } from 'glob';

const resolve = (p: string) => path.resolve(__dirname, p);

const nameReg = /^.*([/\\]+)?src[/\\]+(.*?).js$/;

const entry = glob.sync('./src/**/*.js').reduce((result, url) => {
  const [_, __, name] = nameReg.exec(url) || [];
  result[name] = path.normalize(resolve(url));
  return result;
}, {});

export default defineConfig({
  source: {
    entry,
  },
  tools: {
    htmlPlugin: false,
    rspack: {
      output: {
        chunkFormat: 'module',
        library: {
          type: 'module',
        },
      },
      optimization: {
        splitChunks: false,
        usedExports: false,
      },
      experiments: {
        outputModule: true,
      },
    },
  },
  output: {
    targets: ['web'],
    cleanDistPath: true,
    distPath: {
      root: resolve('./dist'),
      js: '',
    },
    inlineScripts: true,
    filenameHash: false,
    filename: {
      js: '[name].js',
    },
    legalComments: 'inline',
    manifest: true,
    minify: true,
    polyfill: 'usage',
    copy: [
      {
        from: './**/*.d.ts',
        context: resolve('./src'),
      },
    ],
  },
  performance: {
    printFileSize: true,
    removeConsole: true,
    buildCache: true,
  },
  plugins: [
    pluginBabel({
      babelLoaderOptions: {
        presets: ['@babel/preset-env'],
      },
    }),
  ],
});
