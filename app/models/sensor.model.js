var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorDataSchema = new Schema({
    'Temperature': Number,
    'Humidity': Number,
    'P-IN': Number,
    'P-OUT': Number,
    'Timestamp': {
        type: Date,
        default: Date.now
    }
});

mongoose.model('SensorData', SensorDataSchema);