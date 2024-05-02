const express = require('express'); 
const authController = require('../controllers/auth.controllers');
const adminController = require('../controllers/admin.controllers');

const router = express.Router();

// router.patch('/updateRole/:id', adminController.updateRole);
router.get('/', adminController.getUsers);
router.delete('/:id', adminController.deleteUser);
router.patch('/:id', adminController.updateUser);
router.get('/:id', adminController.getUser);
router.post('/image', adminController.uploadImage)



module.exports = router;