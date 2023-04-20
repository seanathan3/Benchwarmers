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
                            .populate("host", "_id username");
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
    const user = await User.findOne({ _id: req.user._id })
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
      date: req.body.date,
      title: req.body.title
    });
    // newGame.attendees.push(user) pushes user object
    newGame.attendees.push(user.username) // pushes user's username TEMPORARY
    let game = await newGame.save();
    user.hostedGames.push(game._id)
    user.attendingGames.push(game._id)
    await user.populate("attendingGames", "date time title")
    user.save()
    game = await game.populate("host", "_id username");
    return res.json(game)
  }
  catch(err) {
    next(err)
  }
})

router.delete('/:id', requireUser, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
    hostedGameIdx = user.hostedGames.indexOf(req.params.id)
    user.hostedGames.splice(hostedGameIdx,1)
    attendingGameIdx = user.attendingGames.indexOf(req.params.id)
    user.attendingGames.splice(attendingGameIdx, 1)
    user.save()
    await Game.findOneAndDelete({ _id: req.params.id })
    return res.json()
  }
  catch(err) {
    const error = new Error('Game not found');
    error.statusCode = 404;
    error.errors = { message: "No game found with that id" };
    return next(error);
  }
});

router.patch('/:id', requireUser, validateGameInput, async (req, res, next) => {
  try {
    let game = await Game.findById(req.params.id)
      game.coordinates = req.body.coordinates
      game.sport = req.body.sport
      game.skillLevel = req.body.skillLevel
      game.description = req.body.description
      // game.host = req.user._id
      game.maxCapacity = req.body.maxCapacity
      game.minCapacity = req.body.minCapacity
      game.photoUrl = req.body.photoUrl
      game.time = req.body.time
      game.date = req.body.date
      game.title = req.body.title
      game.attendees = req.body.attendees
      
      game = await game.save()
      game = await game.populate("host", "_id username");
      return res.json(game)
  }
  catch(err) {
    const error = new Error('Game not found');
    error.statusCode = 404;
    error.errors = { message: "No game found with that id" };
    return next(error);
  }
});



module.exports = router;