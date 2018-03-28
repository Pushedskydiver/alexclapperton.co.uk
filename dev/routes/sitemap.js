import express from 'express'
import map from 'sitemap'

const router = express.Router();

const urls = [
  {
    url: '/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    url: '/about-me/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/portfolio/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/articles/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/contact/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/portfolio/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/portfolio/portfolio-2015/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/portfolio/mmu-website/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/portfolio/love-manchester/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/articles/a-brief-introduction-on-using-css-grid/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/articles/how-to-use-grid-and-flexbox-together/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/articles/working-with-grid-the-holy-grail-of-css-layout/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.80,
  },
  {
    url: '/articles/from-https-to-css-what-i-have-changed-on-my-website/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.64,
  },
  {
    url: '/articles/performance-and-optimisation-getting-your-website-up-to-speed/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.64,
  },
  {
    url: '/articles/the-digital-industry-a-developers-perspective/',
    lastmod: '2014-06-20',
    changefreq: 'monthly',
    priority: 0.64,
  }
];

const sitemap = map.createSitemap({
  hostname: 'https://alexclapperton.co.uk/',
  cacheTime: 1000 * 60 * 24,
  urls: urls
});

router.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

module.exports = router;
