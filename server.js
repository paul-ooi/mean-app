const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
const server = require('http').Server(app);

app.use(express.static(__dirname, 'dist', {index: false})); //SERVER DATA FROM THIS DIRECTORY

server.listen(port, function() {
    console.log('Connected to Port: ' + port);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});


/*
app.get('/places', (req, res) => {
    var places = [{
        id: 1,
        name: 'Pizza Place',
        city: 'Toronto'
      },
      {
        id: 2,
        name: 'Burger Place',
        city: 'Toronto'
      },
      {
        id: 3,
        name: 'Barber',
        city: 'Markham'
      },
      {
        id: 4,
        name: 'Museum',
        city: 'Markham'
      },
      {
        id: 5,
        name: 'Park',
        city: 'Etobicoke'
      },
      {
        id: 6,
        name: 'Art Gallery of Ontario',
        city: 'Toronto'
      },
    ];
    // JSON.stringify(places);
    res.set('Access-Control-Allow-Origin', 'https://localhost:4200');//Allow requests from "localhost:4200" domain only
    // res.set('Access-Control-Allow-Origin', '*');//Allow requests from "*" ALL domains
    res.send(JSON.stringify(places));

})

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


app.get('/matt', (req, res) => {
  Place.find({}, (err, places) => {
    res.set('Access-Control-Allow-Origin', 'https://localhost:4200');
    res.send(places);
  });
});

var server = app.listen(process.env.PORT || 3000, () => {
    console.log('Listening to port: ', server.address().port);
})*/
