//Requirements
var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(cookieParser());

//DB
var db = process.env.MONGODB_URI || "mongodb://localhost/im_coming_home";
mongoose.connect(db);

//Controllers
// var usersController = require('./controllers/users.js');
// app.use('/users', usersController);

var seedsController = require('./controllers/seeds.js');
app.use('/seeds', seedsController);


//Listen
app.listen(port);
console.log('===========================');
console.log('Server is running off HOMECOUNTRY Port: ' + port);
console.log('============================');




