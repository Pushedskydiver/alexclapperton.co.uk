/**
 * @file styles.js - Styles related Gulp tasks
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import through from 'through2';
import fs from 'fs';
import { dest, src } from 'gulp';
import autoprefixer from 'autoprefixer';
import devtools from 'postcss-devtools';
import focus from 'postcss-focus';
import cssnano from 'cssnano';
import mqpacker from 'css-mqpacker';
import cleanselectors from 'postcss-minify-selectors';
import plugins from 'gulp-load-plugins';
import { argv, data } from '../gulpfile.babel';

const $ = plugins();

const obj = { cache: [] }

function getPostCssPlugins() {
  const postCssPlugins = [
    devtools(),
    focus(),
    cleanselectors(),
    autoprefixer(data.plugin.autoprefixer),
    mqpacker(data.plugin.mqpacker),
    cssnano(data.plugin.cssnano)
  ];

  if (argv.prod) {
    postCssPlugins.push(cssnano({
      core: true
    }))
  }

  return postCssPlugins;
}

function generateCacheManifest(chunk, enc, cb) {
  const path = chunk.path.substring(chunk.path.indexOf('main.'), chunk.path.length);
  const { cache } = obj

  cache.push(path);

  const json = JSON.stringify({...cache});

  fs.writeFile('manifest.json', json, 'utf8', cb);

  // return cb(null, chunk);
}

function styles() {
  return src(`${data.paths.source.styles}*.scss`)
    .pipe($.sourcemaps.init())
    .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
    .pipe($.postcss(getPostCssPlugins()))
    .pipe($.if(argv.prod, $.cleanCss(data.plugin.cleancss)))
    .pipe($.sourcemaps.write('sourcemaps'))
    .pipe($.hashFilename({ format: '{name}.{hash}{ext}' }))
    .pipe(through.obj(generateCacheManifest))
    .pipe(dest(data.paths.dist.styles));
}

export default styles;
