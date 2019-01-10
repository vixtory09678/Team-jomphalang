module.exports = function(app){
    var beacon = require('../controller/beacon.controller');
    app.post('/walkIn', beacon.walkIn);
    app.post('/walkOut', beacon.walkOut);
}