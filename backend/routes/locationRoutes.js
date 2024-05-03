const express = require('express')

const router = express.Router()

const locationController = require('../controllers/oneDayTourController')

router.post('/saveLocation', locationController.addOneDayTour)
router.get('/getLocation', locationController.getOneDayTour)

module.exports = router