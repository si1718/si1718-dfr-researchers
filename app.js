var express = require('express');
var app = express();
var db = require('./db');
global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

var ResearcherController = require(__root + 'researcher/ResearcherController');
app.use('/api/v1', ResearcherController);

module.exports = app;