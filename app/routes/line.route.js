module.exports = function(app){
    var line = require('../controller/line.controller');
    app.get('/monitor', line.monitor);
}