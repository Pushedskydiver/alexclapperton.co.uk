/**
 * @file critical.js - Inline critical css above the fold in html file
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    critical = require('critical');


module.exports = function (gulp, data, argv) {

  gulp.task('critical', function () {
      if (argv.prod) {
        critical.generate({
          base: data.paths.dist.base,
          src: 'index.html',
          dest: 'index.html',
          inline: true,
          minify: true,
          ignore: ['@font-face']
        })
      }
  });
}
