import expresslru from 'express-lru'

const data = require('../_data/global.json');
const articles = require('../_data/articles.json');
const portfolio = require('../_data/portfolio.json');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: req => !!req.user
});

module.exports = app => {
  app.get('/articles/', cache, (req, res) => {
  	res.render('articles/index', {
      title: 'Articles',
      articles: true,
      data: {
        global: data,
        articles: articles
      }
    });
  });

  app.get('/articles/:post/', cache, (req, res) => {
    const post = req.params.post;

  	res.render(`articles/${post}`, {
      title: post.replace(/-/g, ' '),
      layout: 'post.hbs',
      articles: true,
      post: true,
      data: {
        global: data,
        articles: articles
      }
    });
  });
};
