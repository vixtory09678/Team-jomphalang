var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {
    mongoose.set('debug', config.debug);
    const options = {
        user: 'admin',
        pass: 'jomphalang'
    };
    var db = mongoose.connect(config.mongoUri,options);

    // require Model hear
    require('../app/models/beacon.model');
    require('../app/models/sensor.model');
    // ==================

    return db;
}