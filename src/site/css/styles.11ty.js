const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const sass = require('sass');
const plugins = require('../../../_config/plugins.json');

const input = path.resolve(process.cwd(), 'src', 'styles', 'main.scss');
const output = 'dist/css/main.css';

function cleanCss() {
  fs.readFile(output, async (error, css) => {
    if (!error) {
      return await postcss([
        require('postcss-sort-media-queries'),
        require('postcss-minify-selectors'),
        require('postcss-clean')(plugins.cleancss),
        require('cssnano')(plugins.cssnano)
      ])
      .process(css, { from: output, to: output })
      .then(result => fs.writeFile(output, result.css, () => true));
    }
  })
};

module.exports = () => {
  sass.render({
    file: input,
    outputStyle: 'expanded',
    outFile: output,
    sourceMap: true
  }, (error, result) => {
      if (!error) {
        fs.mkdirSync('dist/css', { recursive: true });

        fs.writeFile(output, result.css, error => {
          if (!error) {
            console.log('Scss compiled successfully');
            cleanCss();
          }
        });
      }
  });
}
