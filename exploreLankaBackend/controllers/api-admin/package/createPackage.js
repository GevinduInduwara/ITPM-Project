const async = require('async');
const package = require('../../../../models/package');

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
     
    const package = new package({
        packageId: req.body.packageId,
        memners: req.body.memners,
        accomodation: req.body.accomodation,
        meal: req.body.meal,
        transport: req.body.transport,
        destination: req.body.destination,
    });

    package.save(function(err, result){
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