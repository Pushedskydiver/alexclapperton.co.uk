import express from 'express'
import expresslru from 'express-lru'

const router = express.Router();
const data = require('../_data/global.json');
const articles = require('../services/articles');
const projects = require('../services/portfolio');

const cache = expresslru({
  max: 250,
  ttl: 30000,
  skip: req => !!req.user
});

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
router.get('/', cache, (req, res, next) => {
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

router.get('/about-me/', cache, (req, res, next) => {
  res.render('about-me', {
    title: 'About Me',
    articles: req.articles,
    about: true,
    data: {
      global: data
    }
  });
});

router.get('/contact/', cache, (req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    contact: true,
    data: {
      global: data
    }
  });
});

router.get('/offline/', cache, (req, res, next) => {
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
