'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var data = require('../../_data/global.json');
var articles = require('../services/articles');

/* router params */
router.param('slug', function (req, res, next, slug) {
  articles.getArticle(slug).then(function (article) {
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
  articles.getArticles().then(function (articleCollection) {
    req.articles = articleCollection.items;
    next();
  });
});

router.get('/:slug', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('articles/post', {
    title: req.article.articleName,
    article: req.article,
    readableDate: (0, _dateformat2.default)(req.article.date, 'fullDate'),
    layout: 'post.hbs',
    blog: true,
    post: true,
    data: {
      global: data
    }
  });
});

router.get('/', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
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