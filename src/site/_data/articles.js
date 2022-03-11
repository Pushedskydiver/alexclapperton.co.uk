const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const variables = { preview: true };
const type = 'articles';
const query = `query GetContentType2PqfXuJwE8QSyKuM0U6W8MCollection($preview: Boolean!) {
  contentType2PqfXuJwE8QSyKuM0U6W8MCollection(
    limit: 5
    order: [sys_firstPublishedAt_DESC]
    preview: $preview
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
      topicsCollection {
        items {
          sys {
            id
          }
          name
          slug
          icon {
            description
            url
          }
        }
      }
      isExternal
      featuredImage {
        width
        height
        description
        url
      }
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

async function getArticlesData() {
  const response = await fetchContentfulData({ query, type, variables });
  const articles = response.data.contentType2PqfXuJwE8QSyKuM0U6W8MCollection.items;

  return articles;
}

// export for 11ty
module.exports = getArticlesData
