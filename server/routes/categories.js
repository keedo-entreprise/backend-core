let path = require('path');
let router = require('express').Router();

let models = require('../models');

const VIEWS_PATH = 'categories';

//
function renderView(viewName, res, loclas) {
    loclas = loclas || {};
    if (!loclas.error) {
        loclas.error = null;
    }
    console.log(viewName);
    console.log(path.join(VIEWS_PATH, viewName));
    res.render(path.join(VIEWS_PATH, viewName), loclas);
}

/**
 *
 */
router.get('/', (req, res) => {
    console.log('xcxxx');
    models.Category.find(function (err, items) {
        console.log('dddddd');
        renderView('list', res, {list: items});
    })
});
/**
 *
 */
router.get('/:id', (req, res) => {
    models.Category.findOne({
            _id: req.params.id
        },
        function (err, entry) {
            if (err || !entry) {
                res.redirect('/not-found')
            }
            renderView('edit', res, {entry: entry});
        }
    )
});

module.exports = router;