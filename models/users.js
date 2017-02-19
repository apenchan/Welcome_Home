var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');
var airlineSchema = require('./airlines.js').schema;

var UserSchema = new mongoose.Schema({
  firstName: {type: String, require:true},
  lastName: {type: String, require:true},
  username: {type: String, require:true},
  password: {type: String, require:true},
  email: {type: String, require:true},
  savedAirlines: [airlineSchema]
});

UserSchema.pre('save', function(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

UserSchema.methods.authenticate = function(passwordTry) {
  return bcrypt.compareSync(passwordTry, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
