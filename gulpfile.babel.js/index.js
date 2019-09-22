/**
 * @file gulpfile
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { parallel, series, watch } from 'gulp';
import yargs from 'yargs';

export const argv = yargs.argv;
export const data = {
  paths: require('../_config/paths.json'),
  plugin: require('../_config/plugins.json'),
  site: require('../_config/site.json'),
  stylelint: '../_config/stylelint.json',
  eslint: '../_config/eslint.json'
};


/* ============================================================ *\
    Import tasks
\* ============================================================ */

import clean from './clean';
import { copyFavicons, copyManifest, copyBrowserConfig, copyFonts, copyIcons, copyServiceWorker } from './copy';
import { images, webp } from './images';
import imports from './imports';
import eslint from './eslint';
import scripts from './scripts';
import stylelint from './stylelint';
import styles from './styles';
import generateServiceWorker from './worker';


/* ============================================================ *\
    Watch task
\* ============================================================ */

function watchFiles() {
  // Watch image files
  watch(`${data.paths.source.images}**/*`, parallel(images, webp));

  // Watch .scss files
  watch(`${data.paths.source.styles}**/*.scss`, series(styles, stylelint, generateServiceWorker, copyServiceWorker));

  // Watch .js files
  watch(`${data.paths.source.scripts.common}*.js`, series(scripts, eslint, generateServiceWorker, copyServiceWorker));
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

exports.scripts = scripts;
exports.default = buildTask;
exports.watch = watchTask;
exports.dev = series(buildTask, watchTask);
