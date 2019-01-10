var Beacon = require('mongoose').model('BeaconData');
exports.walkIn = function(req, res, next){
    // add walk out
    console.log(req.body);
    if(req.body == undefined){
        res.send("no data");
        return;
    }

    var reqData = req.body;
    Beacon.find().count(function(err, count){
        if (err)
            return next(err);

        count = (count > 0) ? count - 1: 0;
        Beacon.find({},'P-OUT',{skip: count},function(err, data){
            if (err) 
                return next(err);

            console.log(data[0]);
            reqData["P-OUT"] = (data[0] == undefined) ? 0 : data[0]["P-OUT"];
            new Beacon(reqData).save(function(err){
                if (err)
                    return next(err);
                res.json(reqData);
            })
        })
    });
}

exports.walkOut = function(req, res, next){
    // add walk in
    console.log(req.body);
    if(req.body == undefined){
        res.send("no data");
        return;
    }

    var reqData = req.body;
    Beacon.find().count(function(err, count){
        if (err)
            return next(err);

        count = (count > 0) ? count - 1: 0;
        Beacon.find({'P-IN' : {"$gte" : 0}},'P-IN',{skip: count},function(err, data){
            if (err)
                return next(err);
            console.log(data);
            reqData["P-IN"] = (data[0]["P-IN"] == undefined) ? 0 : data[0]["P-IN"];
            new Beacon(reqData).save(function(err){
                if (err)
                    return next(err);
                res.json(reqData);
            })
        })
    });
}