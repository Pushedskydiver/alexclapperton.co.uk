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
      const send = users.map(user => {
        return webpush.sendNotification(user, message)
        .then(response => {
          return response;
        })
        .catch(err => {
          if (err.statusCode === 410) {
            User.remove({id: user.id}, (err, user) => {
              (err) ? console.log('User Details Not Found', err) : console.log('Delete Successful');
            });
          } else {
            console.log('Subscription is no longer valid: ', err);
          }
        });
      });

      Promise.all(send).then(response => res.json(response));
    });
  }
};
