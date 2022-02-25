const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const query = `{
  home(id: "2P27DVt2sMY4kQjO161SDQ") {
    title
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

async function homepageData() {
  const response = await fetchContentfulData({ query, type: 'home' });
  const homepage = response.data.home;

  return homepage;
}

// export for 11ty
module.exports = homepageData
