const htmlMin = require('./src/utils/minify-html.js');
const eachUpTo = require('./src/utils/filters/each-up-to');
const fadeInDelay = require('./src/utils/filters/fade-in-delay');

module.exports = config => {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  config.addTransform('htmlmin', htmlMin);

  config.addFilter('eachUpTo', eachUpTo);
  config.addFilter('deviceFadeInDelay', fadeInDelay);

  config.addPassthroughCopy({ 'src/favicons': 'favicons' });
  config.addPassthroughCopy({ 'src/fonts': 'fonts' });
  config.addPassthroughCopy({ 'src/icons': 'icons' });

  // make the seed target act like prod
  env = (env == 'seed') ? 'prod' : env;

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: `_data/${env}`
    },
    templateFormats : ['hbs', 'md', '11ty.js'],
    htmlTemplateEngine : 'hbs',
    markdownTemplateEngine : 'hbs'
  };
};
