const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Game = mongoose.model('Game');
const { requireUser } = require('../../config/passport');
const validateTweetInput = require('../../validations/tweets');

router.get('/', async (req, res) => {
  try {
    const games = await Game.find()
                              .populate("host", "_id username")
                              .sort({ createdAt: -1 });
    return res.json(games);
  }
  catch(err) {
    return res.json([]);
  }
});


module.exports = router;