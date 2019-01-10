var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorDataSchema = new Schema({
    Temperature: Double,
    Humidity: Double,
    'P-IN': Integer,
    'P-OUT': Integer,
    Timestamp: Timestamp
});

mongoose.model('SensorData', SensorDataSchema);