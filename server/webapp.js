"use strict";
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let i18n = require("i18n");
let LRU = require('lru-cache');
let db = require('./db');


if (process.env.NODE_ENV !== 'production'){
    console.log("#################");
    require('longjohn');
}
// ejs + ejs locals
let engine = require('ejs-locals')
//
let appUtils = require('app-utils')  ;
let helpers = appUtils.helpers;

let app = express();

appUtils.locals(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


i18n.configure({
    locales: ['ar', 'en', 'fr'],
    directory: helpers.getBasePath() + '/locale',
    // sets a custom cookie name to parse locale settings from - defaults to NULL
    cookie: 'i18n',
    defaultLocale: 'ar'
});
let I18N_KEY = "i18n_keedo" ;
//app.use(bodyParser);
app.use(cookieParser(I18N_KEY));
// FIXME
app.use(session({
    secret: I18N_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(i18n.init);

// set active url
app.use(function (req, res, next) {
    let paths = req.path.split('/');
    if (paths.length > 0) {
        res.locals.activeUrl = paths[1];
    }
    else {
        res.locals.activeUrl = 'index';
    }
    res.locals.isAdmin = req.session.isUserAdmin ;
    res.locals.isLoggedIn = req.session.isLoggedIn ;
    res.locals.locale = res.getLocale();
    next();
});

app.use(favicon(path.join(helpers.getBasePath(), 'public', 'favicon.ico')));
app.use(express.static(path.join(helpers.getBasePath(), 'public')));


app.use('/uploads', express.static(path.join(helpers.getUploadURl())));

app.use('/assets', express.static(path.join(helpers.getBasePath(), 'assets')));

app.post('/locale', (req, res) => {
    res.cookie('i18n', req.body.locale);
    res.redirect('/')
});

// set the view engine to ejs
app.engine('ejs', engine);
app.set('views', __dirname + '/views')

app.set('view engine', 'ejs');
app.use(require('./routes'));

app.get('/about', function (req, res, next) {
    res.render(page);
});
// render business
app.get('/:page?', function (req, res, next) {
    //res.sendFile(path.join(helpers.getBasePath(), 'public', 'business.html'))
    let page = req.params.page || 'index';
    res.render(page);
});
// no stacktraces leaked to user
app.use(function (req, res, next) {
    res.status(err.status || 404);
    res.render("404", {error : err});
});

// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render("500", {error : err});
});

module.exports = app;
