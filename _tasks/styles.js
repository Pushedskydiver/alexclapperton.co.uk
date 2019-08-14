/**
 * @file styles.js - Compile scss files to css and hash css
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { resolve } from 'path';
import through from 'through2';
import { readFile, writeFile } from 'fs';
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
    autoprefixer(),
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

function checkErrors(err) {
  if (err) {
    return console.log(err);
  }

  return;
}

function generateCacheManifest(chunk, enc, cb) {
  const file = chunk.path;
  const output = resolve(process.cwd(), 'src', 'cache-manifest.json');
  const { cache } = obj;

  readFile(file, (err, data) => {
    const array = Object.values(JSON.parse(data));
    const cssPath = `main.css?cb=${array[1]}`;

    cache.push(cssPath);
  })

  readFile(output, (err, data) => {
    const array = Object.values(JSON.parse(data));

    array.push(...cache);

    writeFile(output, JSON.stringify({ ...array }), 'utf8', checkErrors);
    cb(null, chunk);
  })
}

function styles() {
  return src(`${data.paths.source.styles}*.scss`)
    .pipe($.sourcemaps.init())
    .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
    .pipe($.postcss(getPostCssPlugins()))
    .pipe($.if(argv.prod, $.cleanCss(data.plugin.cleancss)))
    .pipe($.sourcemaps.write('sourcemaps'))
    .pipe(dest(data.paths.dist.styles))
    .pipe($.buster())
    .pipe(through.obj(generateCacheManifest));
}

export default styles;
