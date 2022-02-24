const articlesService = require('../../../_services/articles');

module.exports = async function () {
  return await articlesService.getArticles().then(collection => {
    const data = collection.items;

    return data
  })
}
