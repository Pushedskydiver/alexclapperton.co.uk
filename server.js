'use strict';

const express = require('express');
const hbs = require('express-handlebars');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');
const methodOverride = require('express-method-override');
const bodyParser = require('body-parser');
const compression = require('compression');
const json = require('express-json');

const app = express();

const options = {
  key: fs.readFileSync(__dirname + '/ssl/server.key'),
  cert: fs.readFileSync(__dirname + '/ssl/server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.enable('strict routing');
app.engine('.hbs', hbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views'),
	defaultLayout: 'default.hbs',
  partialsDir: [path.join(__dirname, 'views/_partials')]
}));
app.set('view engine', '.hbs');
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600 }));
app.use(json());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/index')(app);

app.get('*', (req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if (err.status !== 404) {
    return next();
  }

  res.render('404', { title: '404' });
});

const port = process.env.PORT || 3001;

module.exports = app;

spdy.createServer(options, app).listen(port, error => {
  if (error) {
    console.error(error);
    return process.exit(1)
  } else {
    console.log('Listening on port: ' + port + '.');
  }
});
