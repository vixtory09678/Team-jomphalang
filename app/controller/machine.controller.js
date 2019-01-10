var PeoplePredict = require('mongoose').model('people_predict')

exports.predict = function(req, res, next){
    var predictJson = req.body
    var data = new PeoplePredict(predictJson);

    data.save(function(err){
        if(err)
            return next(err);
        res.json({'status':'ok'});
    })
}