const contentful = require('contentful');

require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';
const contentfulEnv = isProd ? 'master' : 'staging'

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: contentfulEnv,
  space: process.env.CONTENTFUL_SPACE_ID
});

exports.client = client;
