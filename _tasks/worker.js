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
  const file = path.resolve(process.cwd(), 'src', 'scripts', 'manifest.json');
  const contents = JSON.parse(fs.readFileSync(file, 'utf8'));
  const filteredData = Object.keys(contents).filter(data => data.endsWith('js'));

  return filteredData.map(data => {
    const src = Object.getOwnPropertyDescriptor(contents, data);
    const result = `'/js/${src.value}'`;

    return result;
  }).join(',\n');
}

const helpers = {
  cacheScripts: function(str) {
    return str.data.root.scriptsToCache;
  }
};

const templatedata = {
  scriptsToCache
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
