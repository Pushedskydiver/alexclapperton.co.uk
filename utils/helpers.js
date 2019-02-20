
import path from 'path';
import fs from 'fs';

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
      renderScripts: function() {
        const file = path.resolve(process.cwd(), 'src', 'scripts', 'manifest.json');
        const contents = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
        const filteredData = Object.keys(contents).filter(data => data.endsWith('js')).reverse();

        const tags = filteredData.map(data => {
          const src = Object.getOwnPropertyDescriptor(contents, data);

          return `<script src="/js/${src.value}" defer></script>`;
        }).join('');

        return tags;
      },
      deviceFadeInDelay: function(value) {
        const index = parseInt(value, 10) + 1;

        return index * 3;
      }
    };
  };
}());
