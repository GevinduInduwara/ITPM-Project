const async = require('async');
const Package = require('../../../common/Models/offermodel');

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
        offer
            .findOneAndUpdate(
                {
                    offerId: req.params.id,
                },
                {
                    $set: {
                        offerId: req.body.offerId,
                        // Update other fields according to the offermodel.js schema
                        // For example: title, description, validity, etc.
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
