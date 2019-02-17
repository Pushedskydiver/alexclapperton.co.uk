
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
        const manifestData = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'public', 'js', 'manifest.json'), 'utf8'));
        const filteredData = Object.keys(manifestData).filter(data => data.endsWith('js')).reverse();

        const tags = filteredData.map(data => {
          const src = Object.getOwnPropertyDescriptor(manifestData, data);

          return `<script src="/js/${src.value}" defer></script>`;
        }).join('');

        return tags;
      }
    };
  };
}());
