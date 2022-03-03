const fs = require('fs');
const rssFeed = require('@11ty/eleventy-plugin-rss');
const htmlMin = require('./src/utils/transforms/minify-html.js');
const formatDate = require('./src/utils/filters/format-date');
const formatSitemapDate = require('./src/utils/filters/format-sitemap-date');
const getRecentUpdatedArticle = require('./src/utils/filters/get-recent-updated-article-date');
const renderRichTextAsHtml = require('./src/utils/filters/render-text-as-html.js');
const swStyles = require('./src/utils/shortcodes/sw-styles');
const swScripts = require('./src/utils/shortcodes/sw-scripts.js');

module.exports = config => {
  const prod = process.env.NODE_ENV === 'production';

  config.addFilter('formatDate', formatDate);
  config.addFilter('formatSitemapDate', formatSitemapDate);
  config.addFilter('getRecentUpdatedArticle', getRecentUpdatedArticle);
  config.addFilter('renderRichTextAsHtml', renderRichTextAsHtml);

  config.addShortcode('swStyles', swStyles);
  config.addShortcode('swScripts', swScripts);

  config.addPassthroughCopy({ 'src/favicons': 'favicons' });
  config.addPassthroughCopy({ 'src/fonts': 'fonts' });
  config.addPassthroughCopy({ 'src/icons': 'icons' });
  config.addPassthroughCopy({ 'src/images': 'images' });
  config.addPassthroughCopy({ 'src/site.webmanifest': 'site.webmanifest' });
  config.addPassthroughCopy({ 'src/browserconfig.xml': 'browserconfig.xml' });
  config.addPassthroughCopy({ 'src/_redirects': '_redirects' });

  config.addPlugin(rssFeed);

  config.addWatchTarget('src/styles/tailwind.css');

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
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};
