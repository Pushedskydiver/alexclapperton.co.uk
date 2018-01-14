import express from 'express'
import expresslru from 'express-lru'

const router = express.Router();
const articles = require('../services/articles');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: req => !!req.user
});

/* router params */
router.param('slug', (req, res, next, slug) => {
  articles.getArticle(slug).then(article => {
    req.article = article.items[0];
    next();
  });
});

router.use(function (req, res, next) {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

router.get('/articles/:slug', cache, (req, res, next) => {
  res.render('article', {
    title: req.article.fields.articleName,
    article: req.article,
    layout: 'post.hbs',
    blog: true,
    post: true
  });
});

router.get('/articles/', cache, (req, res, next) => {
  res.render('articles/index', {
    title: 'Articles',
    articles: req.articles,
    blog: true
  })
});

module.exports = router;
