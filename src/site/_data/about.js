const homeService = require('../../../_services/about');

module.exports = async function () {
  return await homeService.getAbout().then(collection => {
    const data = collection.items[0].fields;

    return {
      title: data.title,
      heroImage: {
        mobile: data.heroImage[0].fields.file.url,
        desktop: data.heroImage[1].fields.file.url,
      }
    }
  })
}
