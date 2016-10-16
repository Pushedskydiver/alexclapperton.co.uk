var config = require('../config'),
    Metalsmith = require('metalsmith'),
    handlebars = require('handlebars'),
    handlelayouts = require('handlebars-layouts'),
    metadataDirectory = require('metalsmith-metadata-directory'),
    metalLayouts = require('metalsmith-layouts'),
    inPlace = require('metalsmith-in-place'),
    slug = require('metalsmith-slug'),
    permalinks = require('metalsmith-permalinks'),
    sitemap = require('metalsmith-mapsite'),
    robots = require('metalsmith-robots'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')();
    

module.exports = function (gulp, data, argv) {

  gulp.task('html:build', function () {
    handlebars.registerHelper(handlelayouts(handlebars))

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
        'hostname': config.site.baseUrl,
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
        'sitemap': `${config.site.baseUrl}sitemap.xml`
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
  })

  // Minify HTML
  gulp.task('html:min', function () {
    if (argv.prod) {
      return gulp.src(`${data.paths.dist.base}**/*.html`)
        .pipe(plugins.htmlmin(config.plugin.html))
        .pipe(gulp.dest(data.paths.dist.base))
    }
  })
}
