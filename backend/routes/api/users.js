const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Game = mongoose.model('Game');
const passport = require('passport');
const { loginUser, restoreUser, requireUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  console.log(req.user);
  return res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    name: req.user.name,
    bio: req.user.bio,
    borough: req.user.borough,
    hostedGames: req.user.hostedGames,
    attendingGames: req.user.attendingGames,
    favoriteSport: req.user.favoriteSport,
    profilePicUrl: req.user.profilePicUrl
  });
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);  
    return res.json(user);
  } catch (err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  };
});

router.post('/register', validateRegisterInput, async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  });

  if (user) {
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    bio: req.body.bio,
    borough: req.body.borough,
    hostedGames: req.body.hostedGames,
    attendingGames: req.body.attendingGames,
    favoriteSport: req.body.favoriteSport,
    profilePicUrl: req.body.profilePicUrl,
    name: req.body.name
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });
});

router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});

router.patch('/:userId', requireUser, async (req, res, next) => {
  try {
    let user = await User.findById(req.params.userId)
    console.log(user)
    user.username = req.body.username,
    user.email = req.body.email,
    user.bio = req.body.bio,
    user.borough = req.body.borough,
    // user.hostedGames = req.body.hostedGames,
    // user.attendingGames = req.body.attendingGames,
    user.favoriteSport = req.body.favoriteSport,
    user.profilePicUrl = req.body.profilePicUrl,
    user.name = req.body.name
    user.password = req.body.password
      user = await user.save()
      return res.json(user)
  }
  catch(err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
})

router.delete('/:userId', async(req,res,next) => {
  let hostedGames = await Game.find({ host: req.params.userId });
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const futureGames = hostedGames.filter(game => game.date.year >= currentYear && game.date.month >= currentMonth && game.date.day >= currentDay )
  console.log(futureGames)
  
  return res.json();
})

module.exports = router;
