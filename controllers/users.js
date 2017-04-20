var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');
var User = require('../models/users.js');
var School = require('../models/airlines.js');
var request = require('request');
var util = require('util');



//Let's Create a new user!
router.post('/register', function (req, res){
  User.create(req.body, function(err, user){
    if (err) {
      console.log(err)
      res.status(500).end();
    }
    res.send(true);
  });
});

module.exports = router;
