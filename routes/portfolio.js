import express from 'express'
import expresslru from 'express-lru'
import dateFormat from 'dateformat'

const router = express.Router();
const data = require('../_data/global.json');
const articles = require('../services/articles');
const projects = require('../services/portfolio');

const cache = expresslru({
  max: 250,
  ttl: 30000,
  skip: req => !!req.user
});

/* router params */
router.param('slug', (req, res, next, slug) => {
  projects.getProject(slug).then(project => {
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
  projects.getProjects().then(projectsCollection => {
    req.projects = projectsCollection.items;
    next();
  });
});

router.use(function (req, res, next) {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

router.get('/:slug', cache, (req, res, next) => {
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

router.get('/', cache, (req, res, next) => {
  res.render('portfolio/index', {
    title: 'Portfolio',
    projects: req.projects,
    articles: req.articles,
    portfolio: true,
    data: {
      global: data
    }
  })
});

module.exports = router;
