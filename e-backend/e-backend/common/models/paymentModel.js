const mongoose = require('mongoose')

const Schema = mongoose.Schema


const paymentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  // cardName: { type: String, required: true },
  // cardNumber: { type: String, required: true },
  // expiryDate: { type: String, required: true },
  // cvv: { type: String, required: true },
  
})

module.exports = mongoose.model('payments', paymentSchema)