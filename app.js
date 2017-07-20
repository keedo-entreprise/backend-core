"use strict";
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let LRU = require('lru-cache');


let app = express();
let i18n = require("i18n");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


i18n.configure({
    locales:['ar', 'en', 'fr'],
    directory: __dirname + '/locale',
    // sets a custom cookie name to parse locale settings from - defaults to NULL
    cookie: 'LOCALE',
});

//app.use(bodyParser);
//app.use(cookieParser);

app.use(i18n.init);

app.post('/locale', (req, res) => {
    i18n.setLocale(req, req.body.locale);
    req.session.locale = req.body.locale;
    console.log(req.body.locale);
    res.redirect('/')
});

// set active url
app.use(function(req, res, next){
    let paths = req.path.split('/') ;

    if (paths.length > 0){
        app.locals.activeUrl = [1];
    }
    else {
        app.locals.activeUrl = 'index';
    }
    next();
});
// ejs + ejs locals
let engine = require('ejs-locals')
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
  let page = req.params.page || 'index';
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
