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
};
