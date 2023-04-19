const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Game = require('../models/Game');
const bcrypt = require('bcryptjs');

// Create Users
const users = [
  new User({
    username: "kingamin",
    email: "ababar@gmail.com",
    bio: "They see me rollin' they hating.",
    borough: "Brooklyn",
    favoriteSport: "Cycling",
    name: "Amin Babar",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "pedrokim",
    email: "pedrokim@gmail.com",
    bio: "I am a soccer fanatic with luscious locks.",
    borough: "Queens",
    favoriteSport: "Soccer",
    name: "Peter Kim",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "bigskysteve",
    email: "stephend@gmail.com",
    bio: "Don't let the soft voice fool you, I'll eat you like a cupcake.",
    borough: "Brooklyn",
    favoriteSport: "Tennis",
    name: "Stephen DiPietro",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "clarence",
    email: "clarence@gmail.com",
    bio: "Darts aren't the only thing I'll be throwing tonight.",
    borough: "Brooklyn",
    favoriteSport: "Darts",
    name: "Clarence Smith",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "seedbrina",
    email: "seedbrina@seedbrina.com",
    bio: "My name sabruhbruh",
    borough: "Brooklyn",
    favoriteSport: "Table Tennis",
    name: "Seedbrina Acorns",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "kellycodez",
    email: "kellycantcode@appacademy.io",
    bio: "My name Kelly and I can't code",
    borough: "Brooklyn",
    favoriteSport: "Volleyball",
    name: "Kelly Joe",
    hashedPassword: bcrypt.hashSync('password', 10)
  }),
  new User({
    username: "mongobaraluvr",
    email: "mongobara@aol.com",
    bio: "EH!",
    borough: "Bronx",
    favoriteSport: "Fencing",
    name: "Fahim Capybara Khan",
    hashedPassword: bcrypt.hashSync('password', 10)
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
    description: "Let's have a friendly but competitive game of badminton. No sore losers allowed.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 4,
    time: {
      hours: 11,
      minutes: 00
    },
    date: {
      month: 5,
      day: 10,
      year: 2023
    },
    title: "Advanced Badminton Doubles Game"
  }),
  new Game({
    coordinates: {
      lat: 40.726476388361114,
      lng: -73.98150462775097
    },
    sport: "Basketball",
    skillLevel: "Intermediate",
    description: "Need 10 people for a full-court game.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 10,
    minCapacity: 10,
    time: {
      hours: 16,
      minutes: 15
    },
    date: {
      month: 4,
      day: 23,
      year: 2023
    },
    title: "Bball at Washington Sq"
  }),
  new Game({
    coordinates: {
      lat: 40.7239840748134,
      lng: -73.9869401475287
    },
    sport: "Cycling",
    skillLevel: "Beginner",
    description: "Meetup at Meltzer Park for a nice bike ride around the LES.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 10,
    minCapacity: 2,
    time: {
      hours: 9,
      minutes: 30
    },
    date: {
      month: 5,
      day: 3,
      year: 2023
    },
    title: "Biking around the Lower East Side"
  }),
  new Game({
    coordinates: {
      lat: 40.7339224467903,
      lng: -73.99062533685046
    },
    sport: "Football",
    skillLevel: "Beginner",
    description: "Need a couple of people to toss around the pigskin with.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 2,
    time: {
      hours: 11,
      minutes: 15
    },
    date: {
      month: 6,
      day: 11,
      year: 2023
    },
    title: "Let's toss around the football at Cooper Triangle"
  }),
  new Game({
    coordinates: {
      lat: 40.7403,
      lng: -73.9870
    },
    sport: "Table Tennis",
    skillLevel: "Intermediate",
    description: "Let's have some drinks and play table tennis at SPIN.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 2,
    time: {
      hours: 19,
      minutes: 00
    },
    date: {
      month: 6,
      day: 6,
      year: 2023
    },
    title: "Socialize and table tennis at SPIN"
  }),
  new Game({
    coordinates: {
      lat: 40.7503,
      lng: -73.9983
    },
    sport: "Darts",
    skillLevel: "Advanced",
    description: "Come for the darts, stay for the drinks. Let's have some fun.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 8,
    minCapacity: 2,
    time: {
      hours: 20,
      minutes: 30
    },
    date: {
      month: 8,
      day: 10,
      year: 2023
    },
    title: "Darts at Billymark's West"
  }),
  new Game({
    coordinates: {
      lat: 40.7455,
      lng: -74.0087
    },
    sport: "Golf",
    skillLevel: "Beginner",
    description: "Looking to play some golf for the first time. Everyone is welcome.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 10,
    minCapacity: 2,
    time: {
      hours: 12,
      minutes: 00
    },
    date: {
      month: 7,
      day: 23,
      year: 2023
    },
    title: "First Time Golfing at Chelsea Piers Golf Club"
  }),
  new Game({
    coordinates: {
      lat: 40.76986,
      lng: -73.97611
    },
    sport: "Baseball",
    skillLevel: "Beginner",
    description: "Want to get a friendly group together to play a game of baseball. Please have your own glove.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 26,
    minCapacity: 10,
    time: {
      hours: 15,
      minutes: 30
    },
    date: {
      month: 9,
      day: 10,
      year: 2024
    },
    title: "Baseball at Heckscher Ballfields 1"
  }),
  new Game({
    coordinates: {
      lat: 40.7501,
      lng: -74.0012
    },
    sport: "Soccer",
    skillLevel: "Intermediate",
    description: "Looking to meet a group of people who are willing to regularly meetup to play soccer.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 26,
    minCapacity: 6,
    time: {
      hours: 16,
      minutes: 00
    },
    date: {
      month: 8,
      day: 19,
      year: 2023
    },
    title: "Soccer at Chelsea Park"
  }),
  new Game({
    coordinates: {
      lat: 40.82459332205943,
      lng: -73.93492674438043
    },
    sport: "Tennis",
    skillLevel: "Advanced",
    description: "Trying to brush up on my tennis skills. Need a partner or three more for a game of doubles. Fair warning, I'm a beast.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 2,
    time: {
      hours: 11,
      minutes: 30
    },
    date: {
      month: 4,
      day: 26,
      year: 2023
    },
    title: "Competitive Tennis at Frederick Johnson Playground"
  }),
  new Game({
    coordinates: {
      lat: 40.7140,
      lng: -73.9814
    },
    sport: "Handball",
    skillLevel: "Beginner",
    description: "Recently got into handball. Want some people to play and practice with.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 2,
    time: {
      hours: 16,
      minutes: 00
    },
    date: {
      month: 7,
      day: 13,
      year: 2023
    },
    title: "Handball at Henry M. Jackson Playground"
  }),
  new Game({
    coordinates: {
      lat: 40.7140,
      lng: -73.9814
    },
    sport: "Handball",
    skillLevel: "Beginner",
    description: "Recently got into handball. Want some people to play and practice with.",
    host: users[Math.floor(Math.random() * users.length)]._id,
    maxCapacity: 4,
    minCapacity: 2,
    time: {
      hours: 16,
      minutes: 00
    },
    date: {
      month: 3,
      day: 23,
      year: 2023
    },
    title: "Handball at Henry M. Jackson Playground"
  })
]

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

  const insertSeeds = () => {
    console.log("Resetting db and seeding users and games...");
  
    User.collection.drop()
                   .then(() => Game.collection.drop())
                   .then(() => User.insertMany(users))
                   .then(() => Game.insertMany(games))
                   .then(() => {
                     console.log("Done!");
                     mongoose.disconnect();
                   })
                   .catch(err => {
                     console.error(err.stack);
                     process.exit(1);
                   });
  }