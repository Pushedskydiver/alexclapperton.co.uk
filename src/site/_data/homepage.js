const homeService = require('../../../_services/home');

module.exports = async function () {
  return await homeService.getHome().then(collection => {
    const data = collection.items[0].fields;

    return {
      title: data.title,
      subText: data.subText
    }
  })
}
