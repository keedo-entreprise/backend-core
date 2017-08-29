let router = require('express').Router();
let helpers = require('app-utils').helpers;
let path = require('path');
let models = require('models');

const VIEWS_PATH = 'stories';

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
    next();
});
/**
 *
 */
router.get('/', (req, res) => {
    models.Story.find(function (err, items) {
        renderView('list', res, {list: items});
    })
});
/**
 *
 */
router.get('/edit/:id', (req, res) => {
    res.render([VIEWS_PATH, 'edit'].join('\\'));
});
/**
 *
 */
router.get('/:id', (req, res) => {
    models.Story.findById(req.params.id, function (err, item) {
        renderView('view', res, {item: item});
    });
});
/**
 *
 */
router.post('/', (req, res) => {
    res.render([VIEWS_PATH, 'edit'].join('\\'));
});

module.exports = router;