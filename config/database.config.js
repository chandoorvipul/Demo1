var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-sow0w.mongodb.net/flightreservation?retryWrites=true')
 .then(() => {
 console.log("DB connected")
 }, err => {
 console.log("DB error")
 }
 );