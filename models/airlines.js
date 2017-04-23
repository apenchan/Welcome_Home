
var mongoose = require('mongoose');

var airlineSchema = new mongoose.Schema({
  departure_code: String,
  arrival_code: String,
  outboundDate: String,
  inbound_date: String,
  airline_name: String
});

var airline = mongoose.model('Airline', airlineSchema);

module.exports = airline;
