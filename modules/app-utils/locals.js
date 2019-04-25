/**
 *
 * @param app
 */
let fs = require('fs');
let path = require('path');
let helpers = require("./helpers");
let readHash = function () {
    return fs.readFileSync(path.join(process.cwd(), "public", "resources.hash"), 'utf-8');
};

let isProd = helpers.isProd();
//
module.exports = function (app) {
    app.locals._ = require('underscore');
    app.locals.env = {
        isProd: isProd
    };
    app.locals.publicFileSuffixName = (isProd ? "." + readHash() : "") + ".bundle.js";
};