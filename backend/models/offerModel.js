const mongoose = require('mongoose')

const Schema = mongoose.Schema

const offersSchema = new Schema({
    offerTitle: { type: String, required: true }, // Title of the offer
    previousPrice: { type: Number, required: true }, // Previous package price
    discountPrice: { type: Number, required: true }, // Discounted price
    offerDescription: { type: String, required: true }, // Description of the offer
    startDate: { type: Date, required: true }, // Start date of the offer
    endDate: { type: Date, required: true } // End date of the offer
})

module.exports = mongoose.model('offers', offersSchema)