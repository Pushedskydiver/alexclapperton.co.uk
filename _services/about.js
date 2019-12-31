const client = require('./contentful').client

function getAbout(query) {
  query = query || {};
  query.content_type = 'aboutMe';
  return client.getEntries(query);
}

exports.getAbout = getAbout;
