const Cache = require('@11ty/eleventy-cache-assets');

require('dotenv').config();

exports.fetchContentfulData = async ({ query, type }) => {
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const id = process.env.CONTENTFUL_SPACE_ID;
  const env = process.env.CONTENTFUL_ENVIRONMENT;
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${id}/environments/${env}?type=${type}`;

  try {
    const fetchOptions = {
      duration: '1s',
      type: 'json',
      fetchOptions: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }
    };

    const response = await Cache(fetchUrl, fetchOptions);

    // handle errors
    if (response.errors) {
      const errors = response.errors;

      errors.map(error => console.log(error.message));

      throw new Error('Aborting: Contentful GraphQL errors');
    }

    return response
  } catch (error) {
    console.log(error)
  }
}
