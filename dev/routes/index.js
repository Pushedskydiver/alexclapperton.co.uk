import express from 'express'

const router = express.Router();
const data = require('../../_data/global.json');
const articles = require('../services/articles');
const projects = require('../services/portfolio');
const manageUsers = require('../controllers/user.server.controller');
const notification = require('../controllers/notification.server.controller');

router.use((req, res, next) => {
  articles.getArticles().then(articleCollection => {
    req.articles = articleCollection.items;
    next();
  });
});

router.use((req, res, next) => {
  projects.getProjects().then(projectsCollection => {
    req.projects = projectsCollection.items;
    next();
  });
});

// Get static pages
router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('index', {
    title: 'Alex Clapperton',
    articles: req.articles,
    projects: req.projects,
    home: true,
    data: {
      global: data
    }
  });
});

router.get('/about-me/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('about-me', {
    title: 'About Me',
    articles: req.articles,
    about: true,
    data: {
      global: data
    }
  });
});

router.get('/offline/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('offline', {
    title: 'Oops! It looks like you\'re offline',
    articles: req.articles,
    offline: true,
    nofollow: true,
    data: {
      global: data
    }
  });
});

// Handle push notificatios
router.get('/api/', manageUsers.welcome);
router.post('/api/users/', manageUsers.createNewUser);
router.delete('/api/user/:id', manageUsers.deleteOneUser);
router.post('/api/notify/', notification.notifyUsers);

module.exports = router;
