/**
 * @file worker.js - Create service worker to cache assets
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import path from 'path';
import { readFileSync } from 'fs';
import { dest, src } from 'gulp';
import rename from 'gulp-rename';
import handlebars from 'gulp-compile-handlebars';
import { data } from '../gulpfile.babel';

function getScriptsToCache(data) {
  return `'/js/${data}'`;
}

const helpers = {
  cacheStylesheet: function () {
    const file = path.resolve(process.cwd(), 'src', 'cache-manifest.json');
    const contents = JSON.parse(readFileSync(file, 'utf8'));
    const cssPath = Object.values(contents).find(data => data.includes('css'));

    console.log({ cssPath });


    return `'/css/${cssPath}'`;
  },
  cacheScripts: function () {
    const file = path.resolve(process.cwd(), 'src', 'cache-manifest.json');
    const contents = JSON.parse(readFileSync(file, 'utf8'));
    const jsPaths = Object.values(contents).filter(data => data.endsWith('js'));

    return jsPaths.map(data => getScriptsToCache(data)).join(',\n\t');
  }
};

const hbsOptions = {
  helpers
};

function generateServiceWorker() {
  return src(`${data.paths.source.partials}sw.hbs`)
    .pipe(handlebars(null, hbsOptions))
    .pipe(rename('sw.js'))
    .pipe(dest(data.paths.source.base));
}

export default generateServiceWorker;
