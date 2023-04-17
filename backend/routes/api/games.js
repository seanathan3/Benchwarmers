const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Game = mongoose.model('Game');
const { requireUser } = require('../../config/passport');
const validateGameInput = require('../../validations/games');

// Route for all games
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

// Route for a certain user's games
router.get('/user/:userId', async(req,res,next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
  } catch(err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
  try {
    const games = await Game.find({ host: user._id })
                            .sort({ createdAt: -1 })
                            .populate("host", "_id username" );
    return res.json(games)
  }
  catch(err) {
    return res.json([]);
  }
})

// Route for a certain game
router.get('/:id', async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id)
                            .populate("author", "_id username");
    return res.json(game);
  }
  catch(err) {
    const error = new Error('Game not found');
    error.statusCode = 404;
    error.errors = { message: "No game found with that id" };
    return next(error);
  }
});


// Route to create a game
router.post('/', requireUser, validateGameInput, async(req, res, next) => {
  try {
    const newGame = new Game({
      coordinates: req.body.coordinates,
      sport: req.body.sport,
      skillLevel: req.body.skillLevel,
      description: req.body.description,
      host: req.user._id,
      maxCapacity: req.body.maxCapacity,
      minCapacity: req.body.minCapacity,
      photoUrl: req.body.photoUrl,
      time: req.body.time,
      date: req.body.date
    });
    // Might need to get hostId here

    let game = await newGame.save();
    game = await game.populate("host", "_id username");
    return res.json(game)
  }
  catch(err) {
    next(err)
  }
})

module.exports = router;