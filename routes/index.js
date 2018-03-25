import express from 'express'

const router = express.Router();
const data = require('../_data/global.json');
const articles = require('../services/articles');
const projects = require('../services/portfolio');

router.use(function (req, res, next) {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

router.use(function (req, res, next) {
  projects.getProjects().then(projectsCollection => {
    req.projects = projectsCollection.items;
    next();
  });
});

/* GET static pages. */
router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'max-age=2592000000');
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

router.get('/about-me/', (req, res, next) => {
  res.header('Cache-Control', 'max-age=2592000000');
  res.render('about-me', {
    title: 'About Me',
    articles: req.articles,
    about: true,
    data: {
      global: data
    }
  });
});

router.get('/offline/', (req, res, next) => {
  res.header('Cache-Control', 'max-age=2592000000');
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
