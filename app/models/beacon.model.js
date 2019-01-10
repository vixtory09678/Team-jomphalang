var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconDataSchema = new Schema({
    'P-IN': Number,
    'P-OUT': Number,
    'Timestamp': {
        type: Date,
        default: Date.now
    }
});

mongoose.model('BeaconData', BeaconDataSchema);