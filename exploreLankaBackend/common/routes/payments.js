const express = require('express');
const router = express.Router();

router.post('/create', function (req, res, next) {
   
       const create = require('../../controllers/api-client/payment/createPayment');
       create(req, res, next);
});

router.put('/update/:id', function (req, res, next) {
   
       const update = require('../../controllers/api-client/payment/updatePayment');
       update(req, res, next);
});

router.delete('/remove/:id', function (req, res, next) {
   
       const remove = require('../../controllers/api-client/payment/deletePayment');
       remove(req, res, next);
});

router.get('/get/:id', function (req, res, next) {

       const get = require('../../controllers/api-client/payment/getPayment');
       get(req, res, next);
});

router.get('/', function (req, res, next) {
       const getAll = require('../../controllers/api-client/payment/getAllPayment');
       getAll(req, res, next);
   });

module.exports = router; 

