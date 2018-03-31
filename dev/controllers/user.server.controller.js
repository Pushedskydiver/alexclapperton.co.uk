'use strict';

const User = require('../models/user.server.model');

module.exports = {

  welcome: function(req, res) {
    return res.status(200).json({
      message: 'Welcome to the API that powers the push notifications for https://ril-pwa.firebaseapp.com'
    });
  },

  createNewUser: function(req, res) {
    const user = new User();

    user.id = req.body.id;

    user.save((err, users) => {
      if(err) {
        return res.json({
          Error: err
        });
      } else {
        return res.status(201).json({
          success: true,
          message: 'User Created successfully.'
        });
      }
    });
  },

  deleteOneUser: function(req, res, next) {
    const userId = req.params.id;

    User.remove({id: userId}, (err, user) => {
      if(err) {
        return res.status(404).json({
          success: false,
          message: 'User Details Not Found'
        });
      }

      res.json({
        success: true,
        message: 'Delete Successful'
      });

      next();
    });
  }
};
