var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {
    mongoose.set('debug', config.debug);
    var db = mongoose.connect(config.mongoUri);

    // require Model hear
    require('../app/models/data.model');
    require('../app/models/user.model');
    // ==================

    return db;
}