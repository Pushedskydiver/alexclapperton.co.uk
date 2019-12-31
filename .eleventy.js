const fs = require('fs');
const htmlMin = require('./src/utils/minify-html.js');
const eachUpTo = require('./src/utils/filters/each-up-to');
const fadeInDelay = require('./src/utils/filters/fade-in-delay');
const swStyles = require('./src/utils/filters/sw-styles');

module.exports = config => {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  config.addFilter('eachUpTo', eachUpTo);
  config.addFilter('fadeInDelay', fadeInDelay);
  config.addFilter('swStyles', swStyles);

  // config.addWatchTarget('./src/styles/'); // For v0.10.0 release

  config.addPassthroughCopy({ 'src/favicons': 'favicons' });
  config.addPassthroughCopy({ 'src/fonts': 'fonts' });
  config.addPassthroughCopy({ 'src/icons': 'icons' });
  config.addPassthroughCopy({ 'src/images': 'images' });
  config.addPassthroughCopy({ 'src/site.webmanifest': 'site.webmanifest' });
  config.addPassthroughCopy({ 'src/browserconfig.xml': 'browserconfig.xml' });

  // config.addTransform('htmlmin', htmlMin);

  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync('dist/404.html');

        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // make the seed target act like prod
  env = (env == 'seed') ? 'prod' : env;

  return {
    dir: {
      input: 'src/site',
      output: 'dist'
    },
    templateFormats: ['hbs', 'md', '11ty.js'],
    htmlTemplateEngine: 'hbs',
    markdownTemplateEngine: 'hbs'
  };
};
