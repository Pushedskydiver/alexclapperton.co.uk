const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const type = 'homepage';
const query = `{
  home(id: "2P27DVt2sMY4kQjO161SDQ") {
    title
    description
    subText
    heroImageCollection(
      limit: 10
    ) {
      items {
        width
        height
        url
        description
      }
    }
  }
}`

async function getHomepageData() {
  const response = await fetchContentfulData({ query, type });
  const homepage = response.data.home;

  return homepage;
}

// export for 11ty
module.exports = getHomepageData
