const expresslru = require('express-lru');

const cache = expresslru({
  max: 1000,
  ttl: 60000,
  skip: (req) => {
  	return !!req.user;
  }
});

module.exports = app => {
  app.get('/', cache, (req, res) => {
  	res.render('index', { title: 'Express', active_home: true });
  });

  app.get('/contact/', cache, (req, res) => {
  	res.render('contact', { title: 'Contact', active_contact: true });
  });
};
