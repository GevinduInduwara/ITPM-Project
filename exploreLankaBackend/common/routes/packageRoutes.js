const express = require('express')

const router = express.Router()

const packageController = require('../../controllers/packageController')

router.get('/', packageController.getAllPackage)
router.post('/create', packageController.addPackage)
router.get('/get/:id', packageController.getPackage)
router.put('/update/:id', packageController.updatePackage)
router.delete('/delete/:id', packageController.deletePackage)

module.exports = router