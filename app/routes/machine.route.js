module.exports = function(app){
    var ml = require("../controller/machine.controller");
    app.route('/predict')
        .post( ml.predict)
        .get(ml.getPredict);
    app.get('/getSanam',ml.getSanam);
    app.get('/getDataSet',ml.getDataSet);
}