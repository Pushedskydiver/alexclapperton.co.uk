import logger from 'morgan'
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

  app.get('/articles/:post/', cache, (req, res) => {
    const post = req.params.post;

  	res.render(`articles/${post}`, {
      title: post.replace(/-/g, ' '),
      layout: 'post.hbs',
      articles: true,
      post: true,
      data: {
        global: data,
        articles: articles
      }
    });
  });

  app.get('/contact/', cache, (req, res) => {
  	res.render('contact', {
      title: 'Contact',
      contact: true,
      data: {
        global: data,
        articles: articles
      }
    });
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(logger('dev'));
    app.use((err, req, res, next) => {
      res.status(err.status || 500);

      if (err.status === 404) {
        res.render('404', {
          title: '404',
          layout: '404.hbs',
          home: true
        });
      } else {
        res.render('error', {
          layout: false,
          message: err.message,
          error: err
        });
      }
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    if (err.status === 404) {
      res.render('404', {
        title: '404',
        layout: '404.hbs',
        home: true
      });
    } else {
      res.render('error', {
        layout: false,
        message: err.message,
        error: err
      });
    }
  });
};
