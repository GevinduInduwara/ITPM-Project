const express = require('express')

const router = express.Router()

const paymentController = require('../../controllers/paymentController')

router.get('/', paymentController.getAllPayments)
router.post('/create', paymentController.addPayment)
router.get('/get/:id', paymentController.getPayment)
router.put('/update/:id', paymentController.updatePayment)
router.delete('/delete/:id', paymentController.deletePayment)

module.exports = router