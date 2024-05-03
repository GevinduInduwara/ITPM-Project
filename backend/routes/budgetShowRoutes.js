const express = require('express')

const router = express.Router()

const BudgetShowController = require('../controllers/budgetShowController')

router.get('/getbudget', BudgetShowController.calculateTotalCost)


module.exports = router