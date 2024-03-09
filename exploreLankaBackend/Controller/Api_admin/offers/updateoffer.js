const async = require('async');
const offer = require('../../../common/Models/offermodel');

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
                        Img: req.body.Img,
                        previousPrice: req.body.previousPrice,
                        discountPrice: req.body.discountPrice,
                        offerTitle: req.body.offerTitle,
                        offerDescription: req.body.offerDescription,
                        offerValidity: req.body.offerValidity,
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
