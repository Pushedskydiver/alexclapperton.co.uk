import express from 'express'
import expresslru from 'express-lru'
import dateFormat from 'dateformat'

const router = express.Router();
const data = require('../_data/global.json');
const articles = require('../services/articles');

const cache = expresslru({
  max: 250,
  ttl: 30000,
  skip: req => !!req.user
});

/* router params */
router.param('slug', (req, res, next, slug) => {
  articles.getArticle(slug).then(article => {
    if (article.total > 0) {
      req.article = article.items[0].fields;
      next();
    } else {
      res.status(404);
      res.render('404', {
        title: '404',
        layout: '404.hbs',
        home: true
      });
    }
  });
});

router.use(function (req, res, next) {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

router.get('/:slug', cache, (req, res, next) => {
  res.render('articles/post', {
    title: req.article.articleName,
    article: req.article,
    readableDate: dateFormat(req.article.date, 'fullDate'),
    layout: 'post.hbs',
    blog: true,
    post: true,
    data: {
      global: data
    }
  });
});

router.get('/', cache, (req, res, next) => {
  res.render('articles/index', {
    title: 'Articles',
    articles: req.articles,
    blog: true,
    data: {
      global: data
    }
  });
});

module.exports = router;
