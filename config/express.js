var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config');

module.exports = function() {
    var app = express();

    if (process.env.APP_LINE_ENV === "development") {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // require routes hear
    require('../app/routes/data.route')(app)
    require('../app/routes/user.route')(app)
    //-------------------

    return app;
}

