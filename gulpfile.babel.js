/**
 * @file gulpfile
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { parallel, series, watch } from 'gulp';
import yargs from 'yargs';

export const argv = yargs.argv;
export const data = {
  paths: require('./_config/paths.json'),
  plugin: require('./_config/plugins.json'),
  site: require('./_config/site.json'),
  stylelint: './_config/stylelint.json',
  eslint: './_config/eslint.json'
};


/* ============================================================ *\
    Import tasks
\* ============================================================ */

import clean from './_tasks/clean';
import { copyFavicons, copyManifest, copyBrowserConfig, copyFonts, copyIcons, copyServiceWorker } from './_tasks/copy';
import { images, webp } from './_tasks/images';
import imports from './_tasks/imports';
import eslint from './_tasks/eslint';
import scripts from './_tasks/scripts';
import stylelint from './_tasks/stylelint';
import styles from './_tasks/styles';
import generateServiceWorker from './_tasks/worker';


/* ============================================================ *\
    Watch task
\* ============================================================ */

function watchFiles() {
  // Watch image files
  watch(`${data.paths.source.images}**/*`, images);

  // Watch .scss files
  watch(`${data.paths.source.styles}**/*.scss`, series(styles, stylelint));

  // Watch .js files
  watch(`${data.paths.source.scripts.common}*.js`, series(scripts, eslint));
}


/* ============================================================ *\
    Define tasks
\* ============================================================ */

const watchTask = parallel(watchFiles);
const buildTask = series(
  clean,
  scripts, imports, styles,
  parallel(images, webp, copyIcons),
  parallel(copyFavicons, copyManifest, copyBrowserConfig, copyFonts), generateServiceWorker, copyServiceWorker
);

exports.styles = styles;
exports.worker = generateServiceWorker;
exports.default = buildTask;
exports.watch = watchTask;
exports.dev = series(buildTask, watchTask);
