var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');

global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var ResearcherController = require(__root + 'researcher/ResearcherController');
app.use('/api/v1', ResearcherController);

var ResearcherSecureController = require(__root + 'researcher/ResearcherSecureController');
app.use('/api/v1.1', ResearcherSecureController);


app.use(express.static(path.join(__dirname, "public")));

module.exports = app;