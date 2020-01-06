const aboutService = require('../../../_services/about');

module.exports = async function () {
  return await aboutService.getAbout().then(collection => {
    const data = collection.items[0].fields;
    const contentBlocks = data.contentBlock.map(block => block.fields);

    return {
      title: data.title,
      contentBlocks: contentBlocks,
      heroImage: {
        mobile: data.heroImage[1].fields.file.url,
        desktop: data.heroImage[0].fields.file.url,
      }
    }
  })
}
