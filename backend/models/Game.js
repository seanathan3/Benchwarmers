const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  coordinates: {
    lat: {
      type: Number,
      // required: true
    },
    lng: {
      type: Number,
      // required:true
    }
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
    hours: {
      type: Number,
      // required: true
    },
    minutes: {
      type: Number,
      // required: true
    }
  },
  date: {  
    month: {
      type: Number,
      // required: true
    },
    day: {
      type: Number,
      // required: true
    },
    year: {
      type: Number,
      // required: true
    }
  },
  title: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);