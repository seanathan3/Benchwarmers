const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  bio: {
    type: String
  },
  borough: {
    type: String
  },
  hostedGames: {
    type: Array,
    default: []
  },
  attendingGames: {
    type: Array,
    default: []
  },
  favoriteSport: {
    type: String
  },
  profilePicUrl: {
    type: String
  },
  hashedPassword: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);