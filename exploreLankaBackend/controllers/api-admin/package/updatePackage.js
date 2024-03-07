const async = require('async');
const Package = require('../../../common/models/packageModel')

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

        Package
        .findOneAndUpdate(
            {
                packageId: req.params.id,
            },
            {
                $set: {
                    packageId: req.body.packageId,
                    members: req.body.members,
                    accomodation: req.body.accomodation,
                    meal: req.body.meal,
                    transport: req.body.transport,
                    destinations: req.body.destinations
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
