var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {
    mongoose.set('debug', config.debug);
    const options = {
        user: 'team',
        pass: 'jomphalang'
    };
    var db = mongoose.connect(config.mongoUri,options);

    // require Model hear
    require('../app/models/beacon.model');
    require('../app/models/sensor.model');
    require('../app/models/people_predict.model');
    // ==================

    return db;
}