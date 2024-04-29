const mongoose = require('mongoose')

const Schema = mongoose.Schema


const paymentSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  payment: { type: String, required: true }
})

module.exports = mongoose.model('payments', paymentSchema)