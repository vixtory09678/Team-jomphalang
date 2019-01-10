exports.walkIn = function(req, res, next){
    // add walk out
    console.log(req.body);
    res.send(req.body);
}

exports.walkOut = function(req, res, next){
    // add walk in
    console.log(req.body);
    res.send(req.body);
}