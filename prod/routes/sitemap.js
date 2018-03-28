'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _sitemap = require('sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var urls = [{
  url: '/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 1.0
}, {
  url: '/about-me/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/portfolio/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/articles/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/contact/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/portfolio/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/portfolio/portfolio-2015/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/portfolio/mmu-website/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/portfolio/love-manchester/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/articles/a-brief-introduction-on-using-css-grid/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/articles/how-to-use-grid-and-flexbox-together/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/articles/working-with-grid-the-holy-grail-of-css-layout/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.80
}, {
  url: '/articles/from-https-to-css-what-i-have-changed-on-my-website/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.64
}, {
  url: '/articles/performance-and-optimisation-getting-your-website-up-to-speed/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.64
}, {
  url: '/articles/the-digital-industry-a-developers-perspective/',
  lastmod: '2014-06-20',
  changefreq: 'monthly',
  priority: 0.64
}];

var sitemap = _sitemap2.default.createSitemap({
  hostname: 'https://alexclapperton.co.uk/',
  cacheTime: 1000 * 60 * 24,
  urls: urls
});

router.get('/sitemap.xml', function (req, res) {
  sitemap.toXML(function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

module.exports = router;