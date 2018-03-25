import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router();
const data = require('../_data/global.json');

/* router params */
router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'max-age=2592000000');
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
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS
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
