var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');
var cors = require('cors');

global.__root   = __dirname + '/'; 

app.use(cors());

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

var ResearcherController = require(__root + 'researcher/ResearcherController');
app.use('/api/v1', ResearcherController);

var ResearcherSecureController = require(__root + 'researcher/ResearcherSecureController');
app.use('/api/v1.1', ResearcherSecureController);

var TweetCalculatedController = require(__root + 'tweetCalculated/TweetCalculatedController');
app.use('/api/v1/tweets', TweetCalculatedController);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;