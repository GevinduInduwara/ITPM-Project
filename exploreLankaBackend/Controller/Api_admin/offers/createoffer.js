const async = require('async');
const offer = require('../../../common/Models/offermodel');

module.exports = function (req, res, next) {
    async.waterfall([
        saveData,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    }); 
    

    function saveData(callback) {
        const newOffer = new offer({
            offerId: req.body.offerId,
            Img: req.body.Img,
            previousPrice: req.body.previousPrice,
            discountPrice: req.body.discountPrice,
            offerTitle: req.body.offerTitle,
            offerDescription: req.body.offerDescription,
            offerValidity: req.body.offerValidity,
        });

        newOffer
            .save()
            .then((result) => {
                callback(null, result);
            })
            .catch((err) => {
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
