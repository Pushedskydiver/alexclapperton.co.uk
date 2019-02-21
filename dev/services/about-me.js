const client = require('./contentful').client

function getAboutMe(query) {
  query = query || {};
  query.content_type = 'aboutMe';
  return client.getEntries(query);
}

export { getAboutMe };
