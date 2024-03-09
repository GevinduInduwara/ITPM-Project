const async = require('async');
const offer = require('../../../common/Models/offermodel');

module.exports = function (req, res, next) {
    async.waterfall([
        getalloffers,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    });

    function getalloffers(callback) {
        offer
            .find()
            .sort('-createdAt')
            .lean()
            .exec()
            .then(offer => {
                const data = {
                    count: offer.length,
                    offer: offer,
                };
                callback(null, data);
            })
            .catch(err => {
                onErr(err);
            });
    }

    function onErr(err) {
        callback(err);
    }

    function sendResponse(document) {
        res.json(document);
    }
};
