var Beacon = require('mongoose').model('BeaconData');
var fs = require('fs');
var cron = require('node-schedule');
var json = {"P-IN":0,"P-OUT":0};

var j = cron.scheduleJob('0 0 * * * *', function(){
    console.log(new Date());
    new Beacon(json).save(function(err){
        if (err) return;
        console.log("save : "+JSON.stringify(json));
    })
    json["P-IN"] = 0;
    json["P-OUT"] = 0;
})

exports.beacon = function (req, res, next) {
    console.log(req.body);
    var beacon = req.body.beacon;
    if (beacon.status === "enter") {
        json["P-IN"] += 1;
    } else {
        json["P-OUT"] += 1;
    }
    console.log(json);
    res.send("ok");
}

exports.currentUser = function(req, res){
    console.log(json);
    res.json(json);
}