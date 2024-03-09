const async = require('async');
const offer = require('../../../common/Models/offermodel');

module.exports = function (req, res, next) {
    async.waterfall([
        deleteData,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    });
    

    function deleteData(callback) {
        offer.findOneAndDelete({ offerId: req.params.id })
            .lean()
            .exec()
            .then((result) => {
                callback(null, result);
            })
            .catch((error) => {
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
