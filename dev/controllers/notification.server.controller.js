'use strict';

import webpush from 'web-push'

const _ = require('lodash');
const User = require('../models/user.server.model');

module.exports = {

  notifyUsers: function(req, res) {
    const vapidKeys = {
      publicKey:'BBZfIKcG1E4t_KR-whw7Z6hRBiRi4vC216bdtN1mrXNdohzQ26XnYdZh8eaLOWmHagBLja5nuLSoLd_XPTEbYCM',
      privateKey: 'CWYMvvIBFg6M78NwKLSUzUb80lA-iQQTDjKmqBB7uOU'
    };

    webpush.setGCMAPIKey('AAAAOaOvrSM:APA91bEOKRqzlylStCTN_4wXY5fCyujKgPqVjbHmSNfGYll9yjE2qqMK3GJdU6yZcoZxDo1aSLa0M3ZTMss6XUhCh_kDRpvRLBVz9GX62F858fla-vlQpku3TvBYpwWUBJsCJ7IHAY_I');

    webpush.setVapidDetails(
      'mailto:hi@alexclapperton.co.uk',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    User.find({}, (err, users) => {
      users.forEach(user => {
        const message = JSON.stringify({
          title: 'New article published',
          icon: 'ic_launcher',
          body: 'Press to see the latest article'
        });

        webpush.sendNotification(user, message, {})
        .then((response) => {
          return res.json(response);
        })
        .catch((err) =>{
          console.error(err);
        });
      });
    });
  }
};
