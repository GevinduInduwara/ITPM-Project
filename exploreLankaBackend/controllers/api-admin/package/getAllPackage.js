const async = require('async');
const Package = require('../../../common/models/packageModel')

module.exports = function (req, res, next) {

    async.waterfall([
        getAll
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result);
        }
    });

    function getAll(callback) {

        Package
            .find()
            .sort('-createdAt')
            .lean()
            .exec()
            .then(obj => {
                const data = {};
                data['count'] = obj.length;
                data['package'] = obj;
                callback(null, data);
            })
            .catch(err => {
                onErr('error' + err);
            });
    }

    function onErr(err) {
        next(err);
    }

    function sendResponse(document) {
        res.json(document);
    }
};
