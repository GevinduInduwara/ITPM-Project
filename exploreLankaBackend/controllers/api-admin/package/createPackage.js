const async = require('async');
const Package = require('../../../common/models/packageModel')

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
      const package = new Package({
        packageId: req.body.packageId,
        members: req.body.members,
        accomodation: req.body.accomodation,
        meal: req.body.meal,
        transport: req.body.transport,
        destinations: req.body.destinations,
      });

      package
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