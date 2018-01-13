const expresslru = require('express-lru');
const data = require('../_data/global.json');
const articles = require('../_data/articles.json');
const portfolio = require('../_data/portfolio.json');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: req => !!req.user
});

module.exports = app => {
  app.get('/', cache, (req, res) => {
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

  app.get('/about-me/', cache, (req, res) => {
  	res.render('about-me', {
      title: 'About Me',
      about: true,
      data: {
        global: data,
        articles: articles
      }
    });
  });

  app.get('/portfolio/', cache, (req, res) => {
  	res.render('portfolio/index', {
      title: 'Portfolio',
      portfolio: true,
      data: {
        global: data,
        articles: articles,
        portfolio: portfolio
      }
    });
  });

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

  app.get('/contact/', cache, (req, res) => {
  	res.render('contact', {
      title: 'Contact',
      contact: true
    });
  });

  // handling 404 errors
  app.get('*', (req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    if (err.status !== 404) {
      return next();
    }

    res.render('404', { title: '404' });
  });
};
