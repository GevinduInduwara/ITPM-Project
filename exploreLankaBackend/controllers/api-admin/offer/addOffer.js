const async = require('async');
const offer = require('../../../../models/offer');

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
     
    const offer = new offer({
        offerId: req.body.offerId,
        offerName: req.body.offerName,
        offerDescription: req.body.offerDescription,
        offerStartDate: req.body.offerStartDate,
        offerEndDate: req.body.offerEndDate,
        offerPrice: req.body.offerPrice,
        offerImage: req.body.offerImage,
    });

    offer.save(function(err, result){
        if(err){
            onErr(err);
        }else{
            callback(null, result);
        }
    });
    
}

function onErr(err){
    next(err);
}

function sendResponse(document) {
    res.json(document);
}

};