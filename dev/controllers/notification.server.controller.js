'use strict';

import webpush from 'web-push'

const User = require('../models/user.server.model');

module.exports = {

  notifyUsers: function(req, res) {
    const message = JSON.stringify(req.body);
    const vapidKeys = {
      publicKey: process.env.VAPID_PUBLIC_KEY,
      privateKey: process.env.VAPID_PRIVATE_KEY
    };

    webpush.setGCMAPIKey(process.env.GCM_API_KEY);

    webpush.setVapidDetails(
      'mailto:hi@alexclapperton.co.uk',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    User.find({}, (err, users) => {
      users.forEach(user => {
        webpush.sendNotification(user, message, {})
        .then((response) => res.json(response))
        .catch((err) =>{
          console.error(err);
        });
      });
    });
  }
};
