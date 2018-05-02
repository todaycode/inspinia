var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");

var app = express();

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
}));

var router = require('./server/router/main')(app, fs);

app.listen(process.env.PORT || 3000, () => console.log('server listening on port 3000!'));