const express = require('express')
const Payment = require('../models/paymentModel')
const router = express.Router()


// get all payment info
router.get('/', (req, res) => {
    res.json({messg: 'Get all payment info'})
})


// get a single payment info
router.get('/:id', (req, res) => {
    res.json({ messg: 'Get a single payment info'})
})


//POST a new payment info
router.post('/', async (req, res) => {
   
    const {paymentId, paymentDate, paymentAmount, clientName, clientEmail} = req.body
    /*const payment = new Payment({
        paymentId: req.body.paymentId,
        clientName: req.body.clientName,
        paymentDate: req.body.paymentDate,
        paymentAmount: req.body.paymentAmount,
*/

    try {
        const payment =  await Payment.create({paymentId, paymentDate, paymentAmount, clientName, clientEmail})
        res.status(200).json(payment)
    }catch(errpr) {

        res.status(200).json({error: error.message})
    }
})


//Delete payment info
router.delete('/:id', (req, res) => {
    res.json({ messg: 'Delete payment info'})
})


//UPDATE payment info
router.patch('/:id', (req, res) => {
    res.json({ messg: 'Update a payment info'})
})


module.exports = router