/**
 * @file eslint.js - Check for any linting issues in common js files
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { dest, src } from 'gulp';
import plugins from 'gulp-load-plugins';
import fs from 'fs';
import { argv, data } from '../gulpfile.babel';

const $ = plugins();

function isFixed(file) {
  return file.eslint && typeof file.eslint.output === 'string';
}

function eslint() {
  return src(`${data.paths.source.scripts.common}*.js`)
    .pipe($.eslint({
      configFile: data.eslint,
      fix: true
    }))
    .pipe($.eslint.format())
    .pipe($.eslint.format('html', fs.createWriteStream(`${data.paths.reports.eslint}eslint.html`)))
    .pipe($.if(isFixed, dest(data.paths.source.scripts.common)))
    .pipe($.if(argv.prod, $.eslint.failAfterError()));
}

export default eslint;
