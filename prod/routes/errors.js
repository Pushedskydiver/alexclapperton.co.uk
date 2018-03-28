'use strict';

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use((0, _morgan2.default)('dev'));
    app.use(function (err, req, res, next) {
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
  app.use(function (err, req, res, next) {
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