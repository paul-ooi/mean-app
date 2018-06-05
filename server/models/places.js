//requiring mongoose and creating an empty schema variable to be assigned later
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placesSchema = new Schema({
  name: String,
  rating: Number,
  types: [],
  vicinity: String
});

//assign schema to the model
var Place = mongoose.model('places', placesSchema);

//export model to be used in controller files
module.exports = {
  Place: Place
};
