'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _expressMethodOverride = require('express-method-override');

var _expressMethodOverride2 = _interopRequireDefault(_expressMethodOverride);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _expressJson = require('express-json');

var _expressJson2 = _interopRequireDefault(_expressJson);

var _expressMinifyHtml = require('express-minify-html');

var _expressMinifyHtml2 = _interopRequireDefault(_expressMinifyHtml);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressInlineCss = require('express-inline-css');

var _expressInlineCss2 = _interopRequireDefault(_expressInlineCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import nodemailer from 'nodemailer'

var main = require('./routes/index');
var articles = require('./routes/articles');
var portfolio = require('./routes/portfolio');
var contact = require('./routes/contact');

var helpers = require(_path2.default.resolve(__dirname, '../utils', 'helpers.js'))();
var minifyHtmlData = require(_path2.default.resolve(__dirname, '../utils', 'minifyHtml.js'));

var app = (0, _express2.default)();

// view engine setup
app.set('views', _path2.default.join(__dirname, '../views/_pages'));
app.set('view engine', '.hbs');
app.set('view cache', true);
app.use((0, _helmet2.default)());
app.enable('strict routing');
app.engine('.hbs', (0, _expressHandlebars2.default)({
  extname: '.hbs',
  layoutsDir: _path2.default.join(__dirname, '../views/_layouts'),
  defaultLayout: 'default.hbs',
  partialsDir: [_path2.default.join(__dirname, '../views/_partials')],
  helpers: helpers
}));
app.use((0, _compression2.default)());
app.use((0, _expressJson2.default)());
app.use((0, _expressMethodOverride2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _expressMinifyHtml2.default)(minifyHtmlData));
app.use(_express2.default.static(_path2.default.join(__dirname, '../public'), { maxAge: '365 days' }));
app.use((0, _expressInlineCss2.default)({
  override: true,
  cssFilePath: _path2.default.join(__dirname, '../public/css/main.css')
}));

app.use('/', main, require('./routes/sitemap'));
app.use('/about-me/', main);
app.use('/offline/', main);
app.use('/articles/', articles);
app.use('/portfolio/', portfolio);
app.use('/contact/', contact);

require('./routes/errors')(app);

module.exports = app;