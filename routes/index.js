import express from 'express'
import expresslru from 'express-lru'

const router = express.Router();
const data = require('../_data/global.json');
const articles = require('../_data/articles.json');
const portfolio = require('../_data/portfolio.json');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: req => !!req.user
});

/* GET static pages. */
router.get('/', cache, (req, res, next) => {
  res.render('index', {
    title: 'Alex Clapperton',
    home: true,
    data: {
      global: data,
      articles: articles,
      portfolio: portfolio
    }
  });
});

router.get('/about-me/', cache, (req, res, next) => {
  res.render('about-me', {
    title: 'About Me',
    about: true,
    data: {
      global: data,
      articles: articles
    }
  });
});

router.get('/contact/', cache, (req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    contact: true,
    data: {
      global: data,
      articles: articles
    }
  });
});

module.exports = router;
