const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS, INLINES } = require('@contentful/rich-text-types');
const slugifyString = require('../tools/slugify-string');

function renderTocAsHtml(value) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => '',
      [BLOCKS.HEADING_1]: (node, next) => '',
      [BLOCKS.HEADING_2]: (node, next) => (`
        <li class="[margin-block-end:8px] last:[margin-block-end:0]">
          <a href="#${slugifyString(next(node.content))}" class="text-yellow-400 text-sm leading-base fvs-sb border-b-2 border-b-yellow-400 hov:transition-colors hov:duration-200 hov:hover:bg-yellow-400 hov:hover:text-zinc-900 motion-reduce:transition-none">${next(node.content)}</a>
        </li>
      `),
      [BLOCKS.HEADING_3]: (node, next) => '',
      [BLOCKS.HEADING_4]: (node, next) => '',
      [BLOCKS.HEADING_4]: (node, next) => '',
      [BLOCKS.HEADING_5]: (node, next) => '',
      [BLOCKS.HEADING_6]: (node, next) => '',
      [BLOCKS.UL_LIST]: (node, next) => '',
      [BLOCKS.OL_LIST]: (node, next) => '',
      [BLOCKS.LIST_ITEM]: (node, next) => '',
      [BLOCKS.QUOTE]: (node, next) => '',
      [BLOCKS.HR]: (node, next) => '',
      [BLOCKS.EMBEDDED_ENTRY]: (node, next) => '',
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => '',
      [INLINES.EMBEDDED_ENTRY]: (node, next) => '',
      [INLINES.HYPERLINK]: (node, next) => '',
      [INLINES.ENTRY_HYPERLINK]: (node, next) => '',
      [INLINES.ASSET_HYPERLINK]: (node, next) => '',
    }
  }

  return documentToHtmlString(value.json, options);
}

module.exports = renderTocAsHtml;
