const mongoose = require('mongoose')

const Schema = mongoose.Schema

const offerSchema = new Schema({

    offerId: { type: Number, required: true},
    offerName: { type: String, required: true},
    offerDescription: { type: String, required: true},
    offerPrice: { type: Number, required: true},
    offerValidity: { type: Date, required: true},
    offerImage: { type: String, required: true}
})

module.exports = mongoose.model('offers', offerSchema)