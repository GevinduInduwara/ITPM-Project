const async = require('async');
const Package = require('../../../common/models/packageModel')


module.exports = function (req, res, next) {
    async.waterfall([
        updateData,
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(result)
        }
    });

    function updateData(callback) {
      Package.findOneAndDelete({ packageId: req.params.id })
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
