const HighlightPairedShortcode = require('@11ty/eleventy-plugin-syntaxhighlight/src/HighlightPairedShortcode');

const codeBlock = ({ code, language }) => {
  const highlightedCode = HighlightPairedShortcode(code, language);

  return `<div class="[margin-block-end:24px]">${highlightedCode}</div>`;
};

module.exports = codeBlock;
