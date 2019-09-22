/**
 * @file copy.js - Copy assets to public with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { dest, src } from 'gulp';
import { data } from './index';

function copy(source, destination) {
  return src(source)
    .pipe(dest(destination))
}

export function copyFavicons() {
  const src = `${data.paths.source.favicons}**/*`;
  const dest = data.paths.dist.favicons;

  return copy(src, dest);
}

export function copyManifest() {
  const src = './_config/site.webmanifest';
  const dest = data.paths.dist.base;

  return copy(src, dest);
}

export function copyBrowserConfig() {
  const src = './_config/browserconfig.xml';
  const dest = data.paths.dist.base;

  return copy(src, dest);
}

export function copyFonts() {
  const src = data.paths.source.fonts;
  const dest = data.paths.dist.fonts;

  return copy(src, dest);
}

export function copyIcons() {
  const src = data.paths.source.icons;
  const dest = data.paths.dist.icons;

  return copy(src, dest);
}

export function copyServiceWorker() {
  const src = `${data.paths.source.base}sw.js`;
  const dest = data.paths.dist.base;

  return copy(src, dest);
}
