/**
 * @file html.js - Builds HTML pages using Metalsmith
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import Metalsmith from 'metalsmith'
import handlebars from 'handlebars'
import handlelayouts from 'handlebars-layouts'
import helpers from 'handlebars-helpers'
import metadataDirectory from 'metalsmith-metadata-directory'
import metalLayouts from 'metalsmith-layouts'
import inPlace from 'metalsmith-in-place'
import slug from 'metalsmith-slug'
import permalinks from 'metalsmith-permalinks'
import sitemap from 'metalsmith-mapsite'
import robots from 'metalsmith-robots'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = function (gulp, data, argv) {
  gulp.task('html:build', function () {
    handlebars.registerHelper(handlelayouts(handlebars))
    handlebars.registerHelper(helpers())
    handlebars.registerHelper('each_upto', function(ary, max, options) {
      if(!ary || ary.length == 0)
          return options.inverse(this);

      let result = [ ];
      for(let i = 0; i < max && i < ary.length; ++i)
          result.push(options.fn(ary[i]));
      return result.join('');
    });

    const metal = new Metalsmith('.').clean(false)
      .source(data.paths.source.content)
      .destination(data.paths.dist.base)

    metal.use(metadataDirectory({
      'directory': 'src/data/*.json'
    }))

    metal.use(metalLayouts({
      'engine': 'handlebars',
      'directory': 'layouts',
      'partials': 'partials',
      'rename': true
    }))

    metal.use(inPlace({
      'engine': 'handlebars'
    }))

    metal.use(slug())

    metal.use(permalinks({
      pattern: ':directory/:page'
    }))

    if (argv.prod) {
      metal.use(sitemap({
        'hostname': data.site.baseUrl,
        'omitExtension': true,
        'omitIndex': true,
        'priority': 0.5,
        'changefreq': 'monthly'
      }))

      metal.use(robots({
        'disallow': [
          'docs/jsdocs/*',
          'docs/complexity/*'
        ],
        'useragent': '*',
        'sitemap': `${data.site.baseUrl}sitemap.xml`
      }))
    } else {
      // For dev environment we need to disallow all
      metal.use(robots({
        'disallow': ['*'],
        'useragent': '*'
      }))
    }

    metal.build(function (err) {
      if (err) {
        gutil.log(gutil.colors.red(err))
      }
    })
  });

  // Minify HTML
  gulp.task('html:min', function () {
    if (argv.prod) {
      gulp.src(`${data.paths.dist.base}**/*.html`)
        .pipe($.htmlmin(config.plugin.html))
        .pipe(gulp.dest(data.paths.dist.base));
    }
  });
}
