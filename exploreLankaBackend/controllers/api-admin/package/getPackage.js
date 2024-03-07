const async = require('async');
const Package = require('../../../common/models/packageModel')

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

        Package
            .findOne({ 'packageId': req.params.id })
            .lean()
            .exec()
            .then(packageData => {
                if (packageData) {
                    const data = {};
                    data['package'] = packageData;
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
