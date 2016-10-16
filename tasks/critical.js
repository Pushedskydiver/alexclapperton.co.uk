var config = require('../config'),
    critical = require('critical');


module.exports = function (gulp, data, argv) {

  gulp.task('critical', function () {
      if (argv.prod) {
        critical.generate({
          base: data.paths.dist.base,
          css: data.paths.dist.styles + 'main.css',
          dest: `${data.paths.dist.html}index.html`,
          inline: true,
          minify: true,
          ignore: ['@font-face']
        })
      }
  });
}
