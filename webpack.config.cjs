const path = require('path');

const Terser = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { glob } = require('glob');

const resolve = (url) => path.resolve(__dirname, url);

const nameReg = /^.*([/\\]+)?src[/\\]+(.*?).js$/;

const entry = glob.sync('./src/**/*.js').reduce((result, url) => {
  const [_, __, name] = nameReg.exec(url);
  result[name] = path.normalize(resolve(url));
  return result;
}, {});

module.exports = {
  mode: 'production',
  entry,
  experiments: {
    outputModule: true,
  },
  output: {
    clean: true,
    assetModuleFilename: '[name].[ext]',
    library: {
      type: 'module',
    },
    filename: '[name].js',
    path: resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.[cm]?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new Terser(),
    new CopyPlugin({
      patterns: [
        {
          from: './**/*.d.ts',
          context: resolve('./src'),
        },
      ],
    }),
  ],
};
