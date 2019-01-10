var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconDataSchema = new Schema({
    'P-IN': Integer,
    'P-OUT': Integer,
    Timestamp: Timestamp
});

mongoose.model('BeaconData', BeaconDataSchema);