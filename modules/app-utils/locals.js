/**
 *
 * @param app
 */
module.exports= function (app){
    app.locals._ = require('underscore');
    app.locals.env = {
        isProd : false
    }
};