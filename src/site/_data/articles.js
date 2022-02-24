const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const query = `{
  contentType2PqfXuJwE8QSyKuM0U6W8MCollection(
    limit: 10
    order: [sys_firstPublishedAt_ASC]
  ) {
    total
    skip
    limit
    items {
      sys {
        id
      }
      articleName
      slug
      year
      date
      tags
      isExternal
      featuredImage {
        size
        title
        width
        height
        description
        url
      }
      articleDescription
      body {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              title
              description
              url
              width
              height
            }
          }
        }
      }
      articleData
    }
  }
}`

async function articlesData() {
  const response =  await fetchContentfulData({ query });
  const articles = response.data.contentType2PqfXuJwE8QSyKuM0U6W8MCollection.items;

  return articles;
}

// export for 11ty
module.exports = articlesData
