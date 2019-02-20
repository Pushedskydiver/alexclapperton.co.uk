import express from 'express'

const router = express.Router();
const data = require('../../_data/global.json');
const articles = require('../services/articles');
const projects = require('../services/portfolio');

/* router params */
router.param('slug', (req, res, next, slug) => {
  projects.getProject(slug).then(project => {
    if (project.total > 0) {
      req.project = project.items[0].fields;
      req.browserImage = req.project.browserImages.map(image => image.fields);
      req.browserImageDesktop = req.browserImage[0].file;
      req.browserImageMobile = req.browserImage[1].file;
      req.deviceImages = req.project.deviceImages.map(image => image.fields.file);
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

router.use((req, res, next) => {
  projects.getProjects().then(collection => {
    req.projects = collection.items.map(item => item.fields);
    next();
  });
});

router.use((req, res, next) => {
  articles.getArticles().then(collection => {
    req.articles = collection.items.map(item => item.fields);
    next();
  });
});

router.get('/:slug', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('portfolio/project', {
    portfolio: true,
    layout: 'project.hbs',
    title: req.project.projectName,
    slug: req.project.slug,
    project: req.project,
    projectData: req.project.projectData,
    deviceImages: req.deviceImages,
    browserImage: {
      mobile: `https:${req.browserImageMobile.url}`,
      desktop: `https:${req.browserImageDesktop.url}`
    },
    data: {
      global: data
    }
  });
});

router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('portfolio/index', {
    portfolio: true,
    title: 'Portfolio',
    projects: req.projects,
    articles: req.articles,
    data: {
      global: data
    }
  })
});

module.exports = router;
