var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
var mongoose = require('mongoose');

//app.use(express.static(__dirname));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

//db connection taken from hosted mongo db located on mLab
var dbUrl = 'mongodb://MattMawhinney:Bluejays1@ds247690.mlab.com:47690/learning-node';

//use dbUrl and mongoose to connect to db, mongoose is similar to eloquent in laravel as a ORM for NoSQL
mongoose.connect(dbUrl, (err) => {
  console.log('Connected to MongoDB', err);
});

var db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

//require all the models in the directory models then access each one through dot notation the access model property of model file.
var models = require('./models');
var Place = models.places.Place;


//using express get route and mongoose  to get all places in places model from db at index route
app.get('/', (req, res) => {
  Place.find({}, (err, places) => {
    res.send(places);
  });
});

//route to get all places in places model from db at index route
app.get('/baseball', (req, res) => {
  Place.find({ types: 'stadium'}, (err, places) => {
    res.send(places);
  });
});

//add location to the database in a really crude way...
app.get('/createPlace', (req, res) => {
  var myHouse = new Place({
    name: 'MyHouse',
    rating: 0.3,
    vicinity: '64 Gadwall Ave. Barrie, ON'
  });
  myHouse.save(function(err) {
    if(err) throw err;

    console.log('My House is saved');
  });
});

//creating a server on port 3500 using nodes http module
var server = http.listen(3500, () => {
  console.log("Server Up", server.address().port);
});
