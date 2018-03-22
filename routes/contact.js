import express from 'express'
import expresslru from 'express-lru'
import nodemailer from 'nodemailer'

const router = express.Router();
const data = require('../_data/global.json');

const cache = expresslru({
  max: 2592000,
  ttl: 30000,
  skip: req => !!req.user
});

/* router params */
router.get('/', cache, (req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    contact: true,
    data: {
      global: data
    }
  });
});

router.post('/', (req, res) => {
  let smtpTrans = nodemailer.createTransport({
    host: 'smtp.34sp.com',
    auth: {
      user: 'hi@alexclapperton.co.uk',
      pass: '@l3xCl4pp3rt0n06!'
    }
  });

  let mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'hi@alexclapperton.co.uk',
    subject: 'Website contact form',
    text: req.body.message
  };

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(err);
    } else {
      console.log('Message sent');
    }

    smtpTrans.close();
  });
});

module.exports = router;
