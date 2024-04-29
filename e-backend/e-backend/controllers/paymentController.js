const PaymentModel = require('../common/models/paymentModel')

const addPayment = async (req, res, next) => {
  const { name, amount, payment } = req.body 
  let paymentmodel

  try {
    paymentmodel = new PaymentModel({
        name,
        amount,
        payment,
    })
    await paymentmodel.save()
  } catch (err) {
    console.log(err)
  }

  return res.status(201).json({paymentmodel})
}

const getAllPayments = async (req, res, next) => {
  try {
    const payments = await PaymentModel.find({})
    res.status(200).json(payments)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getPayment = async (req, res, next) => {
  const id = req.params.id
  let paymentmodel

  try {
    paymentmodel = await PaymentModel.findById(id)
  } catch (err) {
    console.log(err)
  }

  return res.status(200).json({ paymentmodel })
}

const updatePayment = async (req, res, next) => {
  const id = req.params.id
  const { name, amount, payment } = req.body 

  let paymentmodel

  try {
    paymentmodel = await PaymentModel.findByIdAndUpdate(id, {
      name, amount, payment
    }, { new: true })
  } catch (err) {
    console.log(err)
  }

  return res.status(200).json({ paymentmodel })
}

const deletePayment = async (req, res, next) => {
  try {
    await PaymentModel.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Payment deleted successfully' })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

module.exports = {
    addPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment
}