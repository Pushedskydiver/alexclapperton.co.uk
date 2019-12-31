const client = require('./contentful').client

function getHome(query) {
  query = query || {};
  query.content_type = 'home';
  return client.getEntries(query);
}

exports.getHome = getHome;
