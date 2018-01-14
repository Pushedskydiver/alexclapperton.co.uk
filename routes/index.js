import express from 'express'
import expresslru from 'express-lru'

const router = express.Router();
const data = require('../_data/global.json');
const portfolio = require('../_data/portfolio.json');
const articles = require('../services/articles');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: req => !!req.user
});

router.use(function (req, res, next) {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

/* GET static pages. */
router.get('/', cache, (req, res, next) => {
  res.render('index', {
    title: 'Alex Clapperton',
    articles: req.articles,
    home: true,
    data: {
      global: data,
      portfolio: portfolio
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

module.exports = router;
