/**
 *
 * @param app
 */
let constants = require("./constants");
let fs = require('fs');
let path = require('path');
let readHash = function () {
    return fs.readFileSync(path.join(process.cwd(), "public", "resources.hash"), 'utf-8');
};


let isProd = process.env.NODE_ENV === constants.PROD_KEY;
module.exports = function (app) {
    app.locals._ = require('underscore');
    app.locals.env = {
        isProd: isProd
    };
    // [name]" + (isProductionMode ? ".[hash]" : "") + ".bundle.js
    app.locals.publicFileSuffixName =  (isProd ? "." + readHash() : "") + ".bundle.js";
};