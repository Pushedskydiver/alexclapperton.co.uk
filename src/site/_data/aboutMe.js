const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const type = 'about';
const query = `{
  aboutMe(id: "2biUWOFVHi0F4knwzmFzoL") {
    title
    description
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
    contentBlockCollection(
      limit: 10
    ) {
      items {
        title
        body
      }
    }
  }
}`

async function getAboutMeData() {
  const response = await fetchContentfulData({ query, type });
  const aboutMe = response.data.aboutMe;

  return aboutMe;
}

// export for 11ty
module.exports = getAboutMeData
