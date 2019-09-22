/**
 * @file imports.js - Generate SASS imports automatically
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import { dest, src } from 'gulp';
import plugins from 'gulp-load-plugins';
import { data } from './index';

const $ = plugins();

const creds = {
  'Author': 	'Alex Clapperton',
  'Website': 	'alexclapperton.co.uk'
};

function imports() {
  return src([
    data.paths.sass.settings,
    data.paths.sass.tools.functions,
    data.paths.sass.tools.props,
    data.paths.sass.tools.mixins,
    data.paths.sass.generic,
    data.paths.sass.elements,
    data.paths.sass.objects,
    data.paths.sass.components,
    data.paths.sass.trumps
  ])
    .pipe($.sassGenerateContents(`${data.paths.source.styles}main.scss`, creds))
    .pipe(dest(data.paths.source.styles));
}

export default imports;
