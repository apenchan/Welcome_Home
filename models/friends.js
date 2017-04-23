var mongoose = require("mongoose");

var friendSchema = new mongoose.Schema({
  friend_first_name: String,
  friend_last_name: String
});

var friend = mongoose.model('Friend', friendSchema);

module.exports = friend;
