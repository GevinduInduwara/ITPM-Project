const express = require('express');
const router = express.Router();

// Create offer
router.post('/create', function (req, res, next) {
    const create = require('../../Controller/Api_admin/offers/createoffer');
    create(req, res, next);
});
  
// Update offer
router.put('/update/:id', function (req, res, next) {
    const update = require('../../Controller/Api_admin/offers/updateoffer');
    update(req, res, next);
});


// Delete offer
router.delete('/remove/:id', function (req, res, next) {
    const remove = require('../../Controller/Api_admin/offers/deleteoffer');
    remove(req, res, next);
});

// Get offer by ID
router.get('/get/:id', function (req, res, next) {
    const get = require('../../Controller/Api_admin/offers/getoffer');
    get(req, res, next);
});

// Get all offers
router.get('/', function (req, res, next) {
    const getAll = require('../../Controller/Api_admin/offers/getalloffer');
    getAll(req, res, next);
});

module.exports = router;
