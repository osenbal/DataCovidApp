/* eslint-disable */
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.js';

/* eslint-enable */
export default merge(webpackCommon, {
  mode: 'development',
});
