var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// render business
app.get('/business', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'business.html'))
});
// no stacktraces leaked to user
app.use(function(req, res, next) {
  res.status(err.status || 404);
  res.sendFile(path.join(__dirname, 'public', '404.html'))
});

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'public', '404.html'))
});

module.exports = app;
