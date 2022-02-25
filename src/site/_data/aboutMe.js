const { fetchContentfulData } = require('../../utils/fetchContentfulData');

const query = `{
  aboutMe(id: "2biUWOFVHi0F4knwzmFzoL") {
    title
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

async function aboutMeData() {
  const response = await fetchContentfulData({ query, type: 'about' });
  const aboutMe = response.data.aboutMe;

  return aboutMe;
}

// export for 11ty
module.exports = aboutMeData
