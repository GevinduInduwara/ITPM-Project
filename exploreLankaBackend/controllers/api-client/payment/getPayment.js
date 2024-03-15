const async = require('async');
const Payment = require('../../../common/models/paymentModel')

module.exports = function (req, res, next) {
    async.waterfall([
        returnData,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    });

    function returnData(callback) {

        Payment
            .findOne({ '_id': req.params.id })
            .lean()
            .exec()
            .then(paymentData => {
                if (paymentData) {
                    const data = {};
                    data['payment'] = paymentData;
                    callback(null, data);
                } else {
                    onErr('no data');

                }
            })
            .catch(err => {
                onErr(err);
            });
    }

    function onErr(err) {
        next(err);
    }

    function sendResponse(document) {
        res.json(document);
    }
};