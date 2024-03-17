const express = require('express');
const router = express.Router();


// Create a new payment
router.post('/create', function (req, res, next) {
   
       const create = require('../../controllers/api-client/payment/createPayment');
       create(req, res, next);
});


// Update payment
router.put('/update/:id', function (req, res, next) {
   
       const update = require('../../controllers/api-client/payment/updatePayment');
       update(req, res, next);
});


// Delete payment
router.delete('/remove/:id', function (req, res, next) {
   
       const remove = require('../../controllers/api-client/payment/deletePayment');
       remove(req, res, next);
});


// get payment by id0
router.get('/get/:id', function (req, res, next) {

       const get = require('../../controllers/api-client/payment/getPayment');
       get(req, res, next);
});

router.get('/', function (req, res, next) {
       const getAll = require('../../controllers/api-client/payment/getAllPayment');
       getAll(req, res, next);
   });

module.exports = router; 

