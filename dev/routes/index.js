import express from 'express'

const router = express.Router();
const data = require('../../_data/global.json');
const home = require('../services/home');
const articles = require('../services/articles');
const projects = require('../services/portfolio');
const manageUsers = require('../controllers/user.server.controller');
const notification = require('../controllers/notification.server.controller');

router.use((req, res, next) => {
  home.getHome().then(data => {
    req.home = data.items[0].fields;
    req.heroImage = req.home.heroImage.map(image => image.fields);
    req.heroImageLandscape = req.heroImage[0].file;
    req.heroImageSquare = req.heroImage[1].file;

    next();
  });
});

router.use((req, res, next) => {
  articles.getArticles().then(collection => {
    req.articles = collection.items.map(item => item.fields);

    next();
  });
});

router.use((req, res, next) => {
  projects.getProjects().then(collection => {
    req.projects = collection.items.map(item => item.fields);

    next();
  });
});

// Get static pages
router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('index', {
    home: true,
    title: req.home.title,
    subText: req.home.subText,
    articles: req.articles,
    projects: req.projects,
    heroImage: {
      landscape: {
        url: `https:${req.heroImageLandscape.url}`,
        webp: `https:${req.heroImageLandscape.url}?fm=webp`,
        width: req.heroImageLandscape.details.image.width,
        height: req.heroImageLandscape.details.image.height,
      },
      square: {
        url: `https:${req.heroImageSquare.url}`,
        webp: `https:${req.heroImageSquare.url}?fm=webp`,
        width: req.heroImageSquare.details.image.width,
        height: req.heroImageSquare.details.image.height,
      }
    },
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
