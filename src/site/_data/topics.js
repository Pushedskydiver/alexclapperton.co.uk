const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const type = 'topics';
const query = `{
  topicsCollection(order: name_ASC) {
    items {
      sys {
        id
      }
      slug
      name
      icon {
        description
        url
      }
    }
  }
}`

async function getTopicsData() {
  const response = await fetchContentfulData({ query, type });
  const topics = response.data.topicsCollection.items;

  return topics;
}

// export for 11ty
module.exports = getTopicsData
