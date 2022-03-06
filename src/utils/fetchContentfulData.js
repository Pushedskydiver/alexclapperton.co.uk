const Cache = require('@11ty/eleventy-fetch');

require('dotenv').config();

const defaultOptions = {
  preview: false,
}

exports.fetchContentfulData = async ({
  query,
  type,
  variables = {},
  options = defaultOptions,
}) => {
  const isProd = process.env.NODE_ENV === 'production';
  const id = process.env.CONTENTFUL_SPACE_ID;
  const env = process.env.CONTENTFUL_ENVIRONMENT;
  const fetchDuration = isProd ? '1h' : '1s';
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${id}/environments/${env}?type=${type}`;
  const token = options.preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  try {
    const fetchOptions = {
      duration: fetchDuration,
      type: 'json',
      fetchOptions: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
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
