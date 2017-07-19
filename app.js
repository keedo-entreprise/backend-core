var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
LRU = require('lru-cache');

var app = express();
var i18n = require("i18n");

i18n.configure({
    locales:['ar', 'en', 'fr'],
    directory: __dirname + '/locale',
    // sets a custom cookie name to parse locale settings from - defaults to NULL
    cookie: 'LOCALE',
});
app.use(i18n.init);
// ejs + ejs locals
var engine = require('ejs-locals')
// set the view engine to ejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// render business
app.get('/browse', function(req, res, next) {
  res.render("browse");
});
// render business
app.get('/:page?', function(req, res, next) {
  //res.sendFile(path.join(__dirname, 'public', 'business.html'))
  var page = req.params.page || 'index';
  console.log('running ' + page );
  res.render(page);
});
// no stacktraces leaked to user
app.use(function(req, res, next) {
    res.status(err.status || 404);
  res.sendFile(path.join(__dirname, 'public', '404.html'))
});

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'public', '404.html'))
});
module.exports = app;
