var PeoplePredict = require('mongoose').model('people_predict');
var BeaconData = require('mongoose').model('BeaconData');
var fs = require('fs');
exports.predict = function(req, res, next){
    var predictJson = req.body
    var data = new PeoplePredict(predictJson);

    data.save(function(err){
        if(err)
            return next(err);
        res.json({'status':'ok'});
    })
}

exports.getPredict = function(req, res, next){
    PeoplePredict.findOne({},function(err, data){
        if (err) return next(err);
        var resJson = {};
        resJson.number_of_tourist = data.people_predict;
        res.json(resJson);
    })
}



exports.getSanam = function(req, res, next){
    console.log(req.query.hours);
    var time = new Date()
    time.setHours(new Date().getHours() - req.query.hours);
    
    BeaconData.find({ "$and": [
        {Timestamp: {"$gte" : new Date(time)}},
        {Timestamp: {"$lt" : new Date()}}
    ]},'P-IN',{},function(err, data){
        console.log(data);
        var jsonRes = {};
        var arrData = [];
        for(i in data){
            console.log(i);
            arrData[i] = data[i]["P-IN"];
        }
        console.log(arrData);
        jsonRes.number_of_tourist = arrData;
        res.json(jsonRes);
    })
}



exports.getDataSet = function(req, res, next){
    res.writeHead(200, {'Content-Type' : 'application/json'})
    var stream = fs.createReadStream('./dataSet.json','utf8');
    

    stream.pipe(res)
}