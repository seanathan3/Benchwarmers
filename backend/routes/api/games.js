const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/games"
  });
});

router.post("/create", function(req,res,next) {
  
})

module.exports = router;