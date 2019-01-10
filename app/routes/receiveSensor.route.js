module.exports = function (app){
    var recv = require('../controller/receiveData.controller');
    app.post('/receiveSensor',recv.receiveData);
}