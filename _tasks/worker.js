/**
 * @file worker.js - Create service worker to cache assets
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import path from 'path';
import fs from 'fs';
import { dest, src } from 'gulp';
import rename from 'gulp-rename';
import handlebars from 'gulp-compile-handlebars';
import { data } from '../gulpfile.babel';

function scriptsToCache() {
  const manifestData = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'public', 'js', 'manifest.json'), 'utf8'));
  const filteredData = Object.keys(manifestData).filter(data => data.endsWith('js'));

  return filteredData.map(data => {
    const src = Object.getOwnPropertyDescriptor(manifestData, data);
    const result = `'/js/${src.value}'`;

    return result;
  }).join(',\n');
}

const helpers = {
  cacheScripts: function(str) {
    return str.data.root.scripts;
  }
};

const templatedata = {
  scriptsToCache: scriptsToCache()
};

const hbsOptions = {
  helpers
};

function generateServiceWorker() {
  return src(`${data.paths.source.partials}sw.hbs`)
    .pipe(handlebars(templatedata, hbsOptions))
    .pipe(rename('sw.js'))
    .pipe(dest(data.paths.source.base));
}

export default generateServiceWorker;
