const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const query = `{
  sFzTZbSuM8CoEwygeUYesCollection(
    limit: 10
    order: [date_ASC]
  ) {
    items {
      projectName
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
  const response = await fetchContentfulData({ query, type: 'projects' });
  const articles = response.data.sFzTZbSuM8CoEwygeUYesCollection.items;

  return articles;
}

// export for 11ty
module.exports = projectsData
