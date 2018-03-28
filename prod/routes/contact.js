'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var data = require('../../_data/global.json');

/* router params */
router.get('/', function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=2592000000');
  res.render('contact', {
    title: 'Contact',
    contact: true,
    data: {
      global: data
    }
  });
});

router.post('/', function (req, res) {
  var smtpTrans = _nodemailer2.default.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS
    }
  });

  var mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.EMAIL_ADDRESS,
    subject: 'Website contact form',
    text: req.body.message
  };

  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      console.log(err);
    } else {
      console.log('Message sent');
    }

    smtpTrans.close();
  });
});

module.exports = router;