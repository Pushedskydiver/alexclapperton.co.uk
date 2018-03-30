'use strict';

import gcm from 'node-gcm'

module.exports = app => {
  //To receive push request from client
  app.post('/send_notification/', (req, res) => {
    if (!req.body) {
      res.status(400);
    }

    const message = new gcm.Message();
    const temp = req.body.endpoint.split('/');
    const regTokens = [temp[temp.length - 1]];
    const sender = new gcm.Sender('AAAAOaOvrSM:APA91bEOKRqzlylStCTN_4wXY5fCyujKgPqVjbHmSNfGYll9yjE2qqMK3GJdU6yZcoZxDo1aSLa0M3ZTMss6XUhCh_kDRpvRLBVz9GX62F858fla-vlQpku3TvBYpwWUBJsCJ7IHAY_I');

    // Now the sender can be used to send messages
    sender.send(message, {registrationTokens: regTokens}, (error, response) => {
      error ? es.status(400) : res.status(200);
    });
  });
};
