import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  endpoint: {
    type: String,
    required: true,
    unique: true
  },
  keys: {
    p256dh: {
      type: String,
      required: true,
      unique: true
    },
    auth: {
      type: String,
      required: true,
      unique: true
    }
  },
  registered_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema, 'users');
