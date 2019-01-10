process.env.APP_LINE_ENV = process.env.APP_LINE_ENV || "development";
var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
app.listen(8080);
module.exports = app;

console.log("Server is running.");
