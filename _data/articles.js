const fs = require('fs');
const path = require('path');
const articlesService = require('../_services/articles');

function buildMarkdown(article) {
  const thumbnail = article.featuredImage.fields.file;

  return `
---
tags: articles
title: "${article.articleName}"
description: "${article.articleDescription}"
external: ${article.isExternal}
post: true
thumbnail:
  url: ${thumbnail.url}
  alt: "${article.articleData.alt}"
layout: _layouts/post
---
  `
}

function buildData(article) {
  const fileName = article.slug;
  const year = article.date.split('-')[0];
  const output = path.resolve(process.cwd(), 'src', 'site', 'articles');
  const md = buildMarkdown(article);
  const data = `${md.trim()}\n\n${article.post}`;

  fs.mkdirSync(`${output}/${year}/${fileName}`, { recursive: true });
  fs.writeFileSync(`${output}/${year}/${fileName}/index.hbs`, data);
}


async function fetchArticles() {
  return await articlesService.getArticles().then(collection => {
    const articles = collection.items.map(item => item.fields);

    articles.forEach(buildData)
  });
}

module.exports = fetchArticles;
