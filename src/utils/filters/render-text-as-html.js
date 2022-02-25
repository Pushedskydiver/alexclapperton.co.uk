const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS, INLINES } = require('@contentful/rich-text-types');

module.exports = (value) => {
  // create an asset map
  const assetMap = new Map();

  // loop through the assets and add them to the map
  if (value.links) {
    for (const asset of value.links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, next) => {
        return `<h2 class="text-white text-xl leading-xl fvs-sb [margin-block-end:16px]">${next(node.content)}</h2>`
      },
      [BLOCKS.HEADING_3]: (node, next) => {
        return `<h3 class="text-white text-lg leading-lg fvs-sb [margin-block-end:16px]">${next(node.content)}</h3>`
      },
      [BLOCKS.HEADING_4]: (node, next) => {
        return `<h4 class="text-white text-md leading-md fvs-sb [margin-block-end:16px]">${next(node.content)}</h4>`
      },
      [BLOCKS.PARAGRAPH]: (node, next) => {
        return `<p class="text-white text-base leading-base fvs-rg [margin-block-end:24px] last:[margin-block-end:0px]">${next(node.content)}</p>`
      },
      [BLOCKS.OL_LIST]: (node, next) => {
        return `<ol class="list-decimal [margin-block-end:32px] [margin-inline-start:16px] [padding-inline-start:16px]">${next(node.content)}</ol>`
      },
      [BLOCKS.UL_LIST]: (node, next) => {
        return `<ul class="list-disc [margin-block-end:32px] [margin-inline-start:16px] [padding-inline-start:16px]">${next(node.content)}</ul>`
      },
      [BLOCKS.LIST_ITEM]: (node, next) => {
        return `<li class="[margin-block-end:16px] last:[margin-block-end:0]">${next(node.content)}</li>`
      },
      [BLOCKS.HR]: () => {
        return `<hr class="[margin-block:24px] border-slate-300">`
      },
      [BLOCKS.QUOTE]: (node, next) => {
        return `
          <blockquote class="relative text-center border-t-2 border-b-2 border-solid border-slate-300 [margin-block-start:64px] [margin-block-end:48px] [padding-block:48px]">
            <span class="absolute [inset-block-start:-25px] [inset-inline-start:50%] [inline-size:50px] [block-size:50px] [margin-inline:auto] bg-yellow-400 text-slate-900 text-xxxl [line-height:normal] fvs-rg font-selawik rounded-full -translate-x-1/2">“</span>

            ${node.content.map(item => {
              return `<p class="text-white text-lg leading-lg fvs-sb italic [margin-block-end:8px] last:[margin-block-end:0]">${next(item.content)}</p>`
            }).join('')}
          </blockquote>
        `
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);
        const { description, width, height, url } = asset;

        return `
          <figure class="[margin-block-end:32px]">
            <div class="relative" style="aspect-ratio:${width}/${height}">
              <picture>
                <source media="(max-width: 44.9375rem)" type="image/webp" srcset="${url}?fm=webp&w=570">
                <source media="(min-width: 45rem)" type="image/webp" srcset="${url}?fm=webp">

                <source media="(max-width: 44.9375rem)" srcset="${url}?w=570">
                <source media="(min-width: 45rem)" srcset="${url}">

                <img class="absolute [inset-inline-start:0] [inset-block-start:0] [inline-size:100%] [block-size:100%] object-cover p-8 border-2 border-solid border-slate-300 sm:p-16" src="${url}" alt="${description}" width="${width}" height="${height}" loading="lazy">
              </picture>
            </div>

            <figcaption class="text-white text-center text-sm leading-sm fvs-md [margin-block-start:8px]">${description}</figcaption>
          </figure>
        `
      },
      [INLINES.HYPERLINK]: (node, next) => {
        return `<a href="${node.data.uri}" class="text-yellow-400 fvs-sb border-b-2 border-b-yellow-400 hov:transition-colors hov:duration-200 hov:hover:bg-yellow-400 hov:hover:text-slate-900 motion-reduce:transition-none">${next(node.content)}</a>`
      },
    }
  }

  return documentToHtmlString(value.json, options);
}
