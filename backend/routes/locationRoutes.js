const express = require('express')

const router = express.Router()

const locationController = require('../controllers/oneDayTourController')

router.post('/saveLocation', locationController.addOneDayTour)
router.get('/getLocation', locationController.getOneDayTour)
router.get('/getBudget',locationController.calculateTotalCost)

module.exports = router