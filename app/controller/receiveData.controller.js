exports.receiveData = function(req, res, next){
    res.json(req.body);
}