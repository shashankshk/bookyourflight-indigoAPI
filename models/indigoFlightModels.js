const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema({
  operator: String,
  number: Number,
  seats: Number,
  date: Number,
  month: Number,
  departure: Date,
  arrival: Date,
  price: Number,
  source: String,
  destination: String,
});

mongoose.model('indigoFlights', flightSchema);