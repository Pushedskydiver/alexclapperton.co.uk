import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router();
const data = require('../../_data/global.json');

/* router params */
router.get('/', (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('contact', {
    title: 'Contact',
    contact: true,
    data: {
      global: data
    }
  });
});

router.post('/', (req, res) => {
  const {name, email, message} = req.body;

  console.log(email, 'email');

  const smtpTrans = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOpts = {
    from: `${name} <noreply@alexclapperton.co.uk>`,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Website contact form',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error, 'error');
    } else {
      console.log(response, 'response');
    }
  });
});

module.exports = router;
