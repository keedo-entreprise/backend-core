let router = require('express').Router();
let helpers = require('../utils/helpers');
let path = require('path');

let models = require('../models');
const VIEWS_PATH = 'orders';
//
function renderView(viewName, res, loclas) {
    loclas = loclas || {};
    if (!loclas.error) {
        loclas.error = null;
    }
    res.render([VIEWS_PATH, viewName].join('\\'), loclas);
}

router.use(function (req, res, next) {
    res.locals.smallFooter = true;
    res.locals.noNavigation = true;
    next();
});
/**
 *
 */
router.get('/init/:id', (req, res) => {
    models.Story.findById(req.params.id, function (err, item) {
        renderView('init', res, {item: item});
    });
});

/**
 *
 */
router.post('/init/', (req, res) => {
    console.log(req.body);
    models.Story.findById(req.body.story_id.id, function (err, item) {
        renderView('checkout', res, {item: item, paypal : helpers.getPaypalCrendentials()});
    });
});

module.exports = router;