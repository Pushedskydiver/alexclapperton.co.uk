const client = require('./contentful').client

function getProject(slug, query) {
  query = query || {};
  query['content_type'] = 'sFzTZbSuM8coEwygeUYes';
  query['fields.slug'] = slug;
  return client.getEntries(query);
}

function getProjects(query) {
  query = query || {};
  query.content_type = 'sFzTZbSuM8coEwygeUYes';
  query.order = '-fields.date';
  return client.getEntries(query);
}

export { getProject, getProjects };
