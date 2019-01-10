module.exports = function(app){
    var ml = require("../controller/machine.controller");
    app.post('/predict', ml.predict);
}