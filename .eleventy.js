const fs = require('fs');
const htmlMin = require('./src/utils/minify-html.js');
const fadeInDelay = require('./src/utils/filters/fade-in-delay');
const formatDate = require('./src/utils/filters/format-date');
const swStyles = require('./src/utils/filters/sw-styles');
const swScripts = require('./src/utils/filters/sw-scripts.js');

module.exports = config => {
  const prod = process.env.NODE_ENV === 'prod';

  config.addFilter('fadeInDelay', fadeInDelay);
  config.addFilter('formatDate', formatDate);

  config.addShortcode('swStyles', swStyles);
  config.addShortcode('swScripts', swScripts);

  config.addPassthroughCopy({ 'src/favicons': 'favicons' });
  config.addPassthroughCopy({ 'src/fonts': 'fonts' });
  config.addPassthroughCopy({ 'src/icons': 'icons' });
  config.addPassthroughCopy({ 'src/images': 'images' });
  config.addPassthroughCopy({ 'src/site.webmanifest': 'site.webmanifest' });
  config.addPassthroughCopy({ 'src/browserconfig.xml': 'browserconfig.xml' });
  config.addPassthroughCopy({ 'src/_redirects': '_redirects' });

  if (prod) {
    config.addTransform('htmlmin', htmlMin);
  }

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

  return {
    dir: {
      input: 'src/site',
      output: 'dist'
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
