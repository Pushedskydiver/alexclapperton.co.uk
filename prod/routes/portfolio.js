'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var data = require('../../_data/global.json');
var articles = require('../services/articles');
var projects = require('../services/portfolio');

/* router params */
router.param('slug', function (req, res, next, slug) {
  projects.getProject(slug).then(function (project) {
    if (project.total > 0) {
      req.project = project.items[0].fields;
      next();
    } else {
      res.status(404);
      res.render('404', {
        title: '404',
        layout: '404.hbs',
        home: true
      });
    }
  });
});

router.use(function (req, res, next) {
  projects.getProjects().then(function (projectsCollection) {
    req.projects = projectsCollection.items;
    next();
  });
});

router.use(function (req, res, next) {
  articles.getArticles().then(function (articleCollection) {
    req.articles = articleCollection.items;
    next();
  });
});

router.get('/:slug', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('portfolio/project', {
    title: req.project.projectName,
    slug: req.project.slug,
    project: req.project,
    projectData: req.project.projectData,
    layout: 'project.hbs',
    portfolio: true,
    data: {
      global: data
    }
  });
});

router.get('/', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('portfolio/index', {
    title: 'Portfolio',
    projects: req.projects,
    articles: req.articles,
    portfolio: true,
    data: {
      global: data
    }
  });
});

module.exports = router;