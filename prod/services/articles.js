'use strict';

var client = require('./contentful').client;

function getArticle(slug, query) {
  query = query || {};
  query['content_type'] = '2PqfXUJwE8qSYKuM0U6w8M';
  query['fields.slug'] = slug;
  return client.getEntries(query);
}

function getArticles(query) {
  query = query || {};
  query.content_type = '2PqfXUJwE8qSYKuM0U6w8M';
  query.order = '-fields.date';
  return client.getEntries(query);
}

function getArticlesInCategory(id) {
  return getArticles({ 'fields.categories.sys.id[in]': id });
}

module.exports = {
  getArticle: getArticle,
  getArticles: getArticles
};