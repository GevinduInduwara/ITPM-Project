const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({

  name: { type: String, required: true},
  members: { type: Number, required: true},
  accomodation : {type: String, required: true, enum: ['2-star', '3-star', '4-star', '5-star']},
  meal: {type: String, required: true, enum: ['breakfast', 'lunch', 'dinner']},
  transport: { type: String},
  destinations:  { type: String, required: true}
})

module.exports = mongoose.model('packages', packageSchema)
