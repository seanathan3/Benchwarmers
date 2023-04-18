const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Game = require('../models/Game');
const bcrypt = require('bcryptjs');

// Create Users
const users = [
  new User({
    username: "ababar",
    email: "ababar@gmail.com",
    bio: "They see me rollin' they hating",
    borough: "Brooklyn",
    favoriteSport: "Cycling",
    name: "Amin Babar"
  }),
  new User({
    username: "pedrokim",
    email: "pedrokim@gmail.com",
    bio: "I am a soccer fanatic with luscious locks",
    borough: "Queens",
    favoriteSport: "Soccer",
    name: "Peter Kim"
  }),
  new User({
    username: "stephend",
    email: "stephend@gmail.com",
    bio: "Don't let the soft voice fool you, I'll eat you like a cupcake",
    borough: "Brooklyn",
    favoriteSport: "Tennis",
    name: "Stephen DiPietro"
  }),
  new User({
    username: "clarence",
    email: "clarence@gmail.com",
    bio: "Darts aren't the only thing I'll be throwing tonight",
    borough: "Brooklyn",
    favoriteSport: "Darts",
    name: "Clarence Smith"
  })
]

// Create Games

const games = [
  new Game({
    coordinates: {
      lat: 40.73165306920987,
      lng: -73.99843062704309
    },
    sport: "Badminton",
    skillLevel: "Advanced",
    description: "Let's have a friendly but competitive game of badminton. No sore losers allowed",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 4,
    time: {
      hours: 11,
      minutes: 00,
    },
    date: {
      month: 5,
      day: 10,
      year: 2023,
    },
    title: "Advanced Badminton Doubles Game"
  })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
  // new Game({
  //   coordinates: {
  //     lat: ,
  //     lng:
  //   },
  //   sport: "",
  //   skillLevel: "",
  //   description: "",
  //   host: users[]._id,
  //   maxCapacity: ,
  //   minCapacity: ,
  //   time: {
  //     hours: ,
  //     minutes: ,
  //   },
  //   date: {
  //     month: ,
  //     day: ,
  //     year: ,
  //   },
  //   title: ""
  // })
]