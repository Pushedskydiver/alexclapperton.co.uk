const aboutService = require('../../../_services/about');

module.exports = async function () {
  return await aboutService.getAbout().then(collection => {
    const data = collection.items[0].fields;

    return {
      title: data.title,
      heroImage: {
        mobile: data.heroImage[1].fields.file.url,
        desktop: data.heroImage[0].fields.file.url,
      }
    }
  })
}
