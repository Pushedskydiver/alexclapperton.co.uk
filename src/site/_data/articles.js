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
        firstPublishedAt
        publishedAt
      }
      articleName
      description
      slug
      year
      tags
      isExternal
      featuredImage {
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
          entries {
            block {
              sys {
                id
              }
              __typename
              ... on CodeBlock {
                language
      					code
              }
            }
          }
        }
      }
    }
  }
}`

async function articlesData() {
  const response =  await fetchContentfulData({ query, type: 'articles' });
  const articles = response.data.contentType2PqfXuJwE8QSyKuM0U6W8MCollection.items;

  return articles;
}

// export for 11ty
module.exports = articlesData
