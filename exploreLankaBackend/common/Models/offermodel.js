const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({

    offerId: { type: Number, required: true },
    Img: { type: String, required: true }, // URL to the banner image
    previousPrice: { type: Number, required: true }, // Previous package price
    discountPrice: { type: Number, required: true }, // Discounted price
    offerTitle: { type: String, required: true }, // Title of the offer
    offerDescription: { type: String, required: true }, // Description of the offer
    offerValidity: { type: String, required: true }, // Validity of the offer
   

})

module.exports = mongoose.model('packages', packageSchema)