var gulp = require('gulp'),
    critical = require('critical').stream,
    config = require('../config');

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    gulp.src(config.paths.php.dest + '**/*.php')
        .pipe(critical({
          base: config.paths.base.dest,
          css: config.paths.sass.dest + 'main.css',
          inline: true,
          minify: true,
          ignore: ['@font-face']
        }))
        .pipe(gulp.dest('./dist/css/critical.css'));
});
