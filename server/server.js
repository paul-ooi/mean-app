var express = require ('express');
var app = express();

console.log(__dirname);

app.use(express.static(__dirname)); //SERVER DATA FROM THIS DIRECTORY

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
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');//Allow requests from "localhost:4200" domain only
    // res.set('Access-Control-Allow-Origin', '*');//Allow requests from "*" ALL domains
    res.send(JSON.stringify(places));

})

var server = app.listen(3000, () => {
    console.log('Listening to port: ', server.address().port);
})