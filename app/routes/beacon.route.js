module.exports = function(app){
    var beacon = require('../controller/beacon.controller');
    app.post('/beacon', beacon.beacon)
}