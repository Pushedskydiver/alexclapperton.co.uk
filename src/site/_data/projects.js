const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const type = 'projects';
const query = `{
  sFzTZbSuM8CoEwygeUYesCollection(
    limit: 10
    order: [date_ASC]
  ) {
    items {
      projectName
      description
      slug
      date
      category
      tags
      featuredImage {
        width
        height
        description
        url
      }
      browserImagesCollection(limit: 2) {
        items {
          description
          url
          width
          height
        }
      }
      body {
        json
      }
      deviceImagesCollection(limit: 3) {
        items {
          description
          url
          width
          height
        }
      }
    }
  }
}`

async function projectsData() {
  const response = await fetchContentfulData({ query, type });
  const articles = response.data.sFzTZbSuM8CoEwygeUYesCollection.items;

  return articles;
}

// export for 11ty
module.exports = projectsData
