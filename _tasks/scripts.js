/**
 * @file scripts.js - Combine scripts into single file and uglify
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = (gulp, data, argv) => {
  gulp.task('scripts:compile', () => {
      let source = [];

      if (!argv.prod) {
        source.push(`${data.paths.source.scripts.dev}*.js`)
      }

      source.push(`${data.paths.source.scripts.common}*.js`)
      source.push(`${data.paths.source.scripts.vendor}*.js`)

      return gulp.src(source)
          .pipe($.sourcemaps.init())
          .pipe($.babel())
          .pipe($.order([
              '*',
              'scripts.js'
          ]))
          .pipe($.concat('main.js'))
          .pipe($.if(argv.prod, $.uglify(data.plugin.uglify)))
          .pipe($.sourcemaps.write('.'))
          .pipe(gulp.dest(data.paths.dist.scripts));
  });
}
