const path = require('path');
const fs = require('fs');

(function () {
  'use strict';

  module.exports = function() {
    // Set of handlebar helpers that can be used in templates
    return {
      eachUpTo: function(ary, max, options) {
        if(!ary || ary.length == 0) {
          return options.inverse(this);
        }

        const result = [ ];

        for(let i = 0; i < max && i < ary.length; ++i) {
          result.push(options.fn(ary[i]));
        }

        return result.join('');
      },
      renderStylesPreloadTag: function() {
        const file = path.resolve(process.cwd(), 'src', 'cache-manifest.json');
        const contents = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
        const cssPath = Object.values(contents).find(item => item.endsWith('.css'));

        return `<link rel="preload" href="/css/${cssPath}" as="style">`;
      },
      renderStylesTag: function() {
        const file = path.resolve(process.cwd(), 'src', 'cache-manifest.json');
        const contents = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
        const cssPath = Object.values(contents).find(item => item.endsWith('.css'));

        return `<link rel="stylesheet" href="/css/${cssPath}">`;

      },
      renderScripts: function() {
        const file = path.resolve(process.cwd(), 'src', 'cache-manifest.json');
        const contents = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
        const filteredData = Object.values(contents).filter(data => data.endsWith('js')).reverse();

        const scriptTags = filteredData.map(data => {
          return `<script src="/js/${data}" defer></script>`;
        }).join('');

        return scriptTags;
      },
      deviceFadeInDelay: function(value) {
        const index = parseInt(value, 10) + 1;

        return index * 3;
      }
    };
  };
}());
