const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({

  name: { type: String, default: null },
  members: { type: Number, required: true},
  accomodation : {type: String, required: true, enum: ['2-star', '3-star', '4-star', '5-star']},
  meal: {type: [String], required: true, enum: ['breakfast', 'lunch', 'dinner']},
  transport: { type: String, default: ''},
  imageUrl: { type: String, default: ''}
})

module.exports = mongoose.model('packages', packageSchema)
