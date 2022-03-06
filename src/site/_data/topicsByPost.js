const { fetchContentfulData } = require('../../utils/fetchContentfulData');
const sortItemsByDateAsc = require('../../utils/tools/sort-items-by-date-asc');
const getTopicsData = require('./topics');

const topicsToPosts = [];
const query = `query GetTopicsCollection($slug: String!, $limit: Int!, $skip: Int!) {
  topicsCollection(where: { slug: $slug },  limit: 1) {
    items {
      linkedFrom {
        contentType2PqfXuJwE8QSyKuM0U6W8MCollection(limit: $limit, skip: $skip) {
          total
          items {
            sys {
              id
              firstPublishedAt
            }
            articleName
            slug
            year
            featuredImage {
              width
              height
              description
              url
            }
            articleDescription
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
          }
        }
      }
    }
  }
}
`

async function getPaginatedByTopic(page, topicSlug) {
  const type = `${topicSlug}topicsByPost`;
  const queryLimit = 5;
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;
  const variables = { slug: topicSlug, limit: queryLimit, skip };
  const response = await fetchContentfulData({ query, type, variables });

  const results = response.data.topicsCollection.items[0].linkedFrom.contentType2PqfXuJwE8QSyKuM0U6W8MCollection || { total: 0, items: [] };

  return results;
}

async function getAllByTopic(topicSlug) {
  let page = 1;
  let shouldQueryMorePosts = true;
  const returnPosts = [];

  while (shouldQueryMorePosts) {
    const response = await getPaginatedByTopic(page, topicSlug);

    if (response.items.length > 0) {
      returnPosts.push(...response.items);
    }

    shouldQueryMorePosts = returnPosts.length < response.total;
    page++;
  }

  return returnPosts;
}

async function buildUpMap(topics) {
  const promises = topics.map(async (topic) => {
    const posts = await getAllByTopic(topic.slug);

    topicsToPosts.push({ topic: topic.slug, posts: posts.sort(sortItemsByDateAsc) });
  });

  return await Promise.all(promises);
};

async function getTopicsByPost() {
  const topics = await getTopicsData();

  await buildUpMap(topics);

  return topicsToPosts;
}

// export for 11ty
module.exports = getTopicsByPost
