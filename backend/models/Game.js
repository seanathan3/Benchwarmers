const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
  coordinates: {
    lat: Number,
    lng: Number,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  attendees: [
    {type: Schema.Types.ObjectId, ref: "User"}
  ],
  maxCapacity: {
    type: Number,
    required: true
  },
  minCapacity: {
    type: Number,
    required: true
  },
  photoUrl: {
    type: String
  },
  time: {
    hours: Number,
    minutes: Number,
    required: true
  },
  date: {
    day: Number,
    month: Number,
    year: Number,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);