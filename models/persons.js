var mongoose = require('mongoose');

var personsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name can't be blank!"
  },

  phone: {
    type: Number,
    required: true
  },

  created_date:{
    type: Date,
    default: Date.now
  }
});

var Persons = mongoose.model('Persons', personsSchema);

module.exports = Persons;
