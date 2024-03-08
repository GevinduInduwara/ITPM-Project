const async = require('async');
const Package = require('../../../common/Models/offermodel');

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
        Package
            .find()
            .sort('-createdAt')
            .lean()
            .exec()
            .then(packages => {
                const data = {
                    count: packages.length,
                    packages: packages,
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
