var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');
var airlineSchema = require('./airlines.js').schema;

var userSchema = new mongoose.Schema({
  firstName: {type: String, require:true},
  lastName: {type: String, require:true},
  username: {type: String, require:true},
  password: {type: String, require:true},
  email: {type: String, require:true}
});


