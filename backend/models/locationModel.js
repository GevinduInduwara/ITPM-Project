const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  pickup: [{
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    formattedAddress: { type: String, required: true }
  }],
  first: [{
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    formattedAddress: { type: String, required: true }
  }],
  second: [{
    lat: { type: Number },
    lng: { type: Number },
    formattedAddress: { type: String}
  }],
  third: [{
    lat: { type: Number},
    lng: { type: Number },
    formattedAddress: { type: String }
  }]
});

module.exports = mongoose.model('locations', locationSchema)