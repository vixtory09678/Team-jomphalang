var Sensor = require('mongoose').model('SensorData');
exports.receiveData = function(req, res, next){
    var dataHex = req.body.DevEUI_uplink.payload_hex;

    var data = new Sensor(parseDataToJsonSensor(dataHex));
    data.save(function(err){
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
}

function parseDataToJsonSensor(hexStr) {
    console.log(hexStr);
    
    var tempHex = hexStr.substring(4,8);
    var humiHex = hexStr.substring(12,14);
    var pinHex = hexStr.substring(18,22);
    var poutHex = hexStr.substring(26,30);

    console.log("tempHex : " + tempHex + "humiHex : " + humiHex + "pinHex : " + pinHex + "poutHex : " + poutHex);

    var temp =  ((Buffer.from(tempHex, 'hex')[0] << 8) | Buffer.from(tempHex, 'hex')[1]) / 10.0;
    var humi =  Buffer.from(humiHex, 'hex')[0] * 0.5;
    var pin =   (Buffer.from(pinHex, 'hex')[0] << 8) | Buffer.from(pinHex, 'hex')[1];
    var pout =  (Buffer.from(poutHex, 'hex')[0] << 8) | Buffer.from(poutHex, 'hex')[1];

    var sensorData = {};
    sensorData.Temperature = temp;
    sensorData.Humidity = humi;
    sensorData["P-IN"] = pin;
    sensorData["P-OUT"] = pout;

    return sensorData;
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