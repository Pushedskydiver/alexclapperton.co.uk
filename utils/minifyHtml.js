module.exports = {
  override: true,
  exception_url: false,
  htmlMinifier: {
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: false,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
  }
};
