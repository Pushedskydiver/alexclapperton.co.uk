'use strict';

import gcm from 'node-gcm'

const _ = require('lodash');
const User = require('../models/user.server.model');

module.exports = {

  notifyUsers: function(req, res) {
    const sender = new gcm.Sender('AIzaSyAAnv7Smipt81E3glBrSmN7shA_07gqi4E');

    // Prepare a message to be sent
    const message = new gcm.Message({
      notification: {
        title: 'New article published',
        icon: 'ic_launcher',
        body: 'Press to see the latest article'
      }
    });

    User.find({}, (err, users) => {
      // user subscription ids to deliver message to
      const userIds = _.map(users, 'id');

      // Actually send the message
      sender.send(message, { registrationTokens: userIds }, (err, response) => {
        if (err) {
          console.error(err);
        } else {
          return res.json(response);
        }
      });
    });
  }
};
