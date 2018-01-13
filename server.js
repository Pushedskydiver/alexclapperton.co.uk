'use strict';

import express from 'express'
import hbs from 'express-handlebars'
import spdy from 'spdy'
import fs from 'fs'
import path from 'path'
import methodOverride from 'express-method-override'
import bodyParser from 'body-parser'
import compression from 'compression'
import json from 'express-json'
import minifyHTML from 'express-minify-html'

const helpers = require(path.resolve(__dirname, 'utils', 'helpers.js'))();
const port = process.env.PORT || 3001;

const app = express();

const options = {
  key: fs.readFileSync(__dirname + '/ssl/server.key'),
  cert: fs.readFileSync(__dirname + '/ssl/server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

// view engine setup
app.set('views', path.join(__dirname, 'views/_pages'));
app.enable('strict routing');
app.engine('.hbs', hbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/_layouts'),
  defaultLayout: 'default.hbs',
  partialsDir: [path.join(__dirname, 'views/_partials')],
  helpers: helpers
}));
app.set('view engine', '.hbs');
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600 }));
app.use(json());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: false,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
  }
}));

require('./routes/index')(app);

module.exports = app;

spdy.createServer(options, app).listen(port, error => {
  if (error) {
    console.error(error);
    return process.exit(1)
  } else {
    console.log('Listening on port: ' + port + '.');
  }
});
