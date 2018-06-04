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
      }
    ];
    JSON.stringify(places);
    res.send(places);
})

var server = app.listen(3000, () => {
    console.log('Listening to port: ', server.address().port);
})