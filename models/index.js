var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/medminder');

mongoose.Promise = Promise;

module.exports.Persons = require('./persons.js');
