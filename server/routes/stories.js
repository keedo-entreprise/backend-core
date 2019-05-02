let router = require('express').Router();
let helpers = require('../utils/helpers');
let path = require('path');
let models = require('../models');
let renderView = require('./../utils/render').renderView;

const VIEWS_PATH = 'stories';


router.use(function (req, res, next) {
    res.locals.smallFooter = true;
    next();
});
/**
 *
 */
router.get('/', (req, res) => {
    models.Story.find(function (err, items) {
        renderView([VIEWS_PATH, 'list'], res, {list: items});
    })
});

/**
 *
 */
router.get('/new/', (req, res) => {
    renderView([VIEWS_PATH, 'new'], res, {item: {}});
});
/**
 *
 */
router.get('/:id/edit/', (req, res) => {
    models.Story.findById(req.params.id, function (err, items) {
        renderView([VIEWS_PATH, 'edit'], res);
    });
});

/**
 *
 */
router.get('/:id', (req, res) => {
    models.Story.findById(req.params.id, function (err, item) {
        item.price_tn = "6 dt";
        item.price_other = "12 dt";
        renderView([VIEWS_PATH, 'view'], res, {item: item});
    });
});
/**
 *
 */
router.post('/', (req, res) => {
    renderView([VIEWS_PATH, 'edit'], res);
});

module.exports = router;