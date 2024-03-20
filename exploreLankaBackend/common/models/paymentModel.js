const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paymentSchema = new Schema({

    clientName: {
         type: String, 
         required: true
        },

    paymentAmount: {
        type: Number,
         required: true
        },

    clientEmail: { 
        type: String,
        required: true
        }
}, 
    {    
       // timestamps: true
    }
    )

module.exports = mongoose.model('payment', paymentSchema)

/*
paymentSchema.find().then((result) => {
    console.log(result)
}
*/