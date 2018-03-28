'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var data = require('../../_data/global.json');
var articles = require('../services/articles');
var projects = require('../services/portfolio');

router.use(function (req, res, next) {
  articles.getArticles().then(function (articleCollection) {
    req.articles = articleCollection.items;
    next();
  });
});

router.use(function (req, res, next) {
  projects.getProjects().then(function (projectsCollection) {
    req.projects = projectsCollection.items;
    next();
  });
});

/* GET static pages. */
router.get('/', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('index', {
    title: 'Alex Clapperton',
    articles: req.articles,
    projects: req.projects,
    home: true,
    data: {
      global: data
    }
  });
});

router.get('/about-me/', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('about-me', {
    title: 'About Me',
    articles: req.articles,
    about: true,
    data: {
      global: data
    }
  });
});

router.get('/offline/', function (req, res, next) {
  res.header('Cache-Control', 'public, ax-age=2592000000');
  res.render('offline', {
    title: 'Oops! It looks like you\'re offline',
    articles: req.articles,
    offline: true,
    nofollow: true,
    data: {
      global: data
    }
  });
});

module.exports = router;