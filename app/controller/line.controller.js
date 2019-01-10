var Sensor = require('mongoose').model('SensorData');
var date = require('mongoose');

exports.monitor = function(req, res ,next){
    var resJson = {};

    var time = new Date();
    time.setHours(new Date().getHours() - 1);
    
    Sensor.find({ "$and": [
        {Timestamp: {"$gte" : new Date(time)}},
        {Timestamp: {"$lt" : new Date()}}
    ]
    },function(err, data){
        if(err) {
            console.log("err : " + err);
            return next(err);
        } else {
            console.log(data);
            var size = Object.keys(data).length
            if (size == 0) {
                res.json(data);
                return;
            }
            resJson.Temperature = data[size-1].Temperature;
            resJson.Humidity = data[size-1].Humidity;
            resJson["P-IN"] = data[0]["P-IN"];
            resJson["P-OUT"] = data[0]["P-OUT"];
            resJson.Timestamp = data[0].Timestamp;
            res.json(resJson);
        }
    })
}