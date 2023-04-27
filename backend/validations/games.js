const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateGameInput = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a title'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a description'),
  // check('coordinates')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Please enter a location'),
  check('sport')
    .exists({checkFalsy: true})
    .withMessage('Please select a sport'),
  check('skillLevel')
    .exists({checkFalsy: true})
    .withMessage('Please select a skill level'),
  check('maxCapacity')
    .exists({checkFalsy: true})
    .withMessage('Please enter the max number of participants')
    .isInt({min: 2})
    .withMessage('Game must have at least 2 participants'),
  check('time')
    .exists({checkFalsy: true})
    .withMessage('Please enter the start time of your game'),
  check('date')
    .exists({checkFalsy: true})
    .withMessage('Please enter the date of your game'),
  handleValidationErrors
];

module.exports = validateGameInput;