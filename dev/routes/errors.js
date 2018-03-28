import logger from 'morgan'

module.exports = app => {
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
