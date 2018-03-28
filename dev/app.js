'use strict';

import express from 'express'
import path from 'path'
import hbs from 'express-handlebars'
import methodOverride from 'express-method-override'
import bodyParser from 'body-parser'
import compression from 'compression'
import json from 'express-json'
import minifyHtml from 'express-minify-html'
import helmet from 'helmet'
import inlineCss from 'express-inline-css'
// import nodemailer from 'nodemailer'

const main = require('./routes/index');
const articles = require('./routes/articles');
const portfolio = require('./routes/portfolio');
const contact = require('./routes/contact');

const helpers = require(path.resolve(__dirname, '../utils', 'helpers.js'))();
const minifyHtmlData = require(path.resolve(__dirname, '../utils', 'minifyHtml.js'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views/_pages'));
app.set('view engine', '.hbs');
app.set('view cache', true);
app.use(helmet());
app.enable('strict routing');
app.engine('.hbs', hbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '../views/_layouts'),
  defaultLayout: 'default.hbs',
  partialsDir: [path.join(__dirname, '../views/_partials')],
  helpers: helpers
}));
app.use(compression());
app.use(json());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(minifyHtml(minifyHtmlData));
app.use(express.static(path.join(__dirname, '../public'), { maxAge: '365 days' }));
app.use(inlineCss({
  override: true,
  cssFilePath: path.join(__dirname, '../public/css/main.css')
}));

app.use('/', main, require('./routes/sitemap'));
app.use('/about-me/', main);
app.use('/offline/', main);
app.use('/articles/', articles);
app.use('/portfolio/', portfolio);
app.use('/contact/', contact);

require('./routes/errors')(app);

module.exports = app;
