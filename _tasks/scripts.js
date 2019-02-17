/**
 * @file scripts.js - Combine scripts into single file and uglify
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { dest } from 'gulp';
import webpack from 'webpack-stream';
import { argv, data } from '../gulpfile.babel';

function scripts() {
  const webpackConfig = require('../webpack.config')(argv);

  return webpack(webpackConfig)
    .pipe(dest(data.paths.dist.scripts));
}

export default scripts;
