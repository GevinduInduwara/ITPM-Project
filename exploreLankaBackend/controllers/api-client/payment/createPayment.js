const async = require('async');
const Payment = require('../../../common/models/paymentModel');

module.exports = function (req, res, next) {
    async.waterfall([
        saveData,
    ], function (err, result) {
        if (err) {
            next(err);
        }else{
            sendResponse(result);
        }
    });

    function saveData(callback){
     
    const payment = new Payment({
       
        clientName: req.body.clientName,
        clientEmail: req.body.clientEmail,
        // paymentDate: req.body.paymentDate
    });

    payment
        .save()
        .then((result) => {
          callback(null, result);
        })
        .catch((err) => {
          onErr(err);
        });
    }

function onErr(err){
    next(err);
}

function sendResponse(document) {
    res.json(document);
}

};