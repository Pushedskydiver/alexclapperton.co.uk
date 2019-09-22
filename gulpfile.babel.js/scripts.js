/**
 * @file scripts.js - Bundle scripts and uglify with webpack
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 * @template webpack.config.js
 */

import run from 'gulp-run';

function scripts() {
  return run('npm run webpack').exec();
}

export default scripts;
