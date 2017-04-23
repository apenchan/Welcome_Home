var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/im_coming_home";
var router = express.Router();
var User = require('../models/users.js');
var Airline = require('../models/airlines.js');

router.get('/', function(req, res){
  var user1 = new User({
  firstName: "Anna",
  lastName: "Penchansky",
  username: "thislovebuzz",
  password: "password",
  email: "afterbarbieshead@hotmail.com",
  savedAirlines: []
  });

  var airline1 = new Airline ({
    departure_code: "JFK",
    arrival_code: "TLV",
    outboundDate: "2017-05-16",
    inbound_date: "2017-05-17",
    airline_name: "Delta"
  });

  var friend1 = new Friend ({
    friend_first_name: "Brandon",
    friend_last_name: "Schuster"
  });

  user1.save();
  airline1.save();
  friend1.save();
  user1.savedAirlines.push(airline1);
  user1.save();
  user1.savedFriends.push(friend1);

  console.log("==============");
  console.log("seed that db baby");
  console.log("===============");
  res.end();
});

module.exports = router;
