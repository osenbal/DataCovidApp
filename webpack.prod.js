/* eslint-disable */
import { merge } from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpackCommon from './webpack.common.js';

/* eslint-enable */
export default merge(webpackCommon, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
