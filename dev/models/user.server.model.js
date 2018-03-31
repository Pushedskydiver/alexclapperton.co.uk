import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  id:       {
    type: String,
    required: true,
    unique: true
  },
  registered_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema, 'users');
