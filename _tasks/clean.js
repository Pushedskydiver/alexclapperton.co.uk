/**
 * @file clean.js - Clean directory with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import del from 'del';
import { data } from '../gulpfile.babel';

function clean() {
  return del([data.paths.dist.base]);
}

export default clean;
