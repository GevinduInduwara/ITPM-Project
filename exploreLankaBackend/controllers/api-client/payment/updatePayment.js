const async = require('async');
const Payment = require('../../../common/models/paymentModel')

module.exports = function (req, res, next) {
    async.waterfall([
        updateData,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    });

    function updateData(callback) {

        Payment
        .findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: {
          
                    clientName: req.body.clientName,
                    clientEmail: req.body.clientEmail,
                // paymentDate: req.body.paymentDate
                }
            },
            { new: true }
        )
        .lean()
        .exec()
        .then(result => {
            callback(null, result);
        })
        .catch(error => {
            onErr(error);
        });
    }

    function onErr(err) {
        next(err);
    }

    function sendResponse(document) {
        res.json(document);
    }
};