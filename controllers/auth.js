var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');
var User = require('../models/users.js');
var jwt = require('jsonwebtoken');

//Get get that passport goin
router.use(passport.initialize());

router.get('/', function(req,res){
  res.send("signing in");
});

//if login works, get the following
router.post('/', passport.authenticate('local', {session: false}), function (req, res, next){
  console.log("login is up");
  console.log('req.body:' + req.body);

//Expiration check
  var token = jwt.sign(req.user, process.env.JWT_SECRET, {
    expiresIn: 1400
  });

  console.log(token);
  res.json({token: token});
});

module.exports = router;
