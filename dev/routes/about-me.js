import express from 'express'

const router = express.Router();
const data = require('../../_data/global.json');
const aboutMe = require('../services/about-me');
const articles = require('../services/articles');

router.use((req, res, next) => {
  aboutMe.getAboutMe().then(data => {
    req.aboutMe = data.items[0].fields;
    req.heroImage = req.home.heroImage.map(image => image.fields);
    req.heroImageDesktop = req.heroImage[0].file;
    req.heroImageMobile = req.heroImage[1].file;
    next();
  });
});

router.use((req, res, next) => {
  articles.getArticles().then(collection => {
    req.articles = collection.items.map(item => item.fields);
    next();
  });
});

router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('about-me', {
    about: true,
    title: req.aboutMe.title,
    articles: req.articles,
    heroImage: {
      desktop: {
        url: `https:${req.heroImageDesktop.url}`,
        webp: `https:${req.heroImageDesktop.url}?fm=webp`
      },
      mobile: {
        url: `https:${req.heroImageMobile.url}`,
        webp: `https:${req.heroImageMobile.url}?fm=webp`
      }
    },
    data: {
      global: data
    }
  });
});

module.exports = router;
