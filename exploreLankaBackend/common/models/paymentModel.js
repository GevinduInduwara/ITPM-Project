const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paymentSchema = new Schema({

    paymentId: {
            type: Number,
            required: true
        },
    clientName: {
         type: String, required: true
        },
    paymentDate: { 
        type: String, required: true
        },
    paymentAmount: {
        type: Number, required: true
        },
    clientEmail: { 
        type: Date, required: true
        }
}, {
    timestamps: true})


module.exports = mongoose.model('payment', paymentSchema)
/*
paymentSchema.find().then((result) => {
    console.log(result)
}

*/

