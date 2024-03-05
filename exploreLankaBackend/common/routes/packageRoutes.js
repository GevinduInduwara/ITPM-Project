const express = require('express');
const router = express.Router();

router.post('/create', function (req, res, next) {
   
       const create = require('../../controllers/api-admin/package/createPackage');
       create(req, res, next);
});

router.put('/update/:id', function (req, res, next) {
   
       const update = require('../../controllers/api-admin/package/updatePackage');
       update(req, res, next);
});

router.delete('/remove/:id', function (req, res, next) {
   
       const remove = require('../../controllers/api-admin/package/deletePackage');
       remove(req, res, next);
});

router.get('/get/:id', function (req, res, next) {

       const get = require('../../controllers/api-admin/package/getPackage');
       get(req, res, next);
});

router.get('/', function (req, res, next) {
       const getAll = require('../../controllers/api-admin/package/getAllPackage');
       getAll(req, res, next);
   });

module.exports = router; 