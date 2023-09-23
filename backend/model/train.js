const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainName: String,
  trainNumber: Number,
  departureTime: {
    Hours: Number,
    Minutes: Number,
    Sec: Number,
  },
  seatsAvailable: {
    sleeper: Number,
    AC: Number,
  },
  price: {
    sleeper: Number,
    AC: Number,
  },
  delayedBy: Number,
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
