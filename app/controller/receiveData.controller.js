var Sensor = require('mongoose').model('SensorData');
exports.receiveData = function(req, res, next){
    console.log(req.body);
}

exports.receivePost = function(req, res, next){
    console.log(req.body);
    var data = new Sensor(req.body);
    data.save(function(err){
        if (err){
            return next(err);
        } else {
            res.json(data);
        }
    })
}