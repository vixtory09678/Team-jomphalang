var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("Sample Code for RESTful API");
});

app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
      console.log(data);
      res.end(data);
  });
});

app.get('/showbyID/:id', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        // console.log(data.key);
        for (var keys in data) {
            console.log(data[keys]["id"]);
            if(data[keys]["id"] == req.params.id){
                res.json(data[keys]);
                return;
            }
        }
        res.send("not found");
    })
})

app.post('/addUser', function(req, res) {
    var json = req.body;
  
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
      data = JSON.parse(data);
      var id = Object.keys(data).length + 1; 
      data["user"+id] = req.body;
      data["user"+id]["id"] = id;
      res.end(JSON.stringify(data));
    })
})

app.post('/addMultiUser', function(req, res) {
    var json = req.body
    const size = Object.keys(json).length;

    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        var id = Object.keys(data).length + 1;
        for (let i = 0; i < size; i++) {
            data["user"+ (id+i)] = json[i];
            data["user"+ (id+i)]["id"] = (id+i);
        }
        res.end(JSON.stringify(data));
    })
    

})

app.delete('/deleteUser/:id', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        var size = Object.keys(data).length;
        if(req.params.id > size || req.params.id < 0){
            res.send("not found");
            return;
        }
        for (var keys in data) {
            console.log(data[keys]["id"]);
            if(data[keys]["id"] == req.params.id){
                delete data[keys];
            }
        }
        res.json(data);
    })
})

var server = app.listen(8080, function(){
  var port = server.address().port;
  console.log("Sample Code for RESTful API run at ", port);
});

// module.exports = app;
