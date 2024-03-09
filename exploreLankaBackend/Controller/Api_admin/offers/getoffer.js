const async = require('async');
const offer = require('../../../common/Models/offermodel');

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
        offer
            .findOne({ 'offerId': req.params.id })
            .lean()
            .exec()
            .then(offerData => {
                if (offerData) {
                    const data = {};
                    data['offer'] = offerData;
                    callback(null, data);
                } else {
                    onErr('No data found for the specified offer ID.');
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
