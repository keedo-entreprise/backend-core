let models = require('models');
let router = require('express').Router();

const VIEWS_PATH = 'categories';

//
function renderView(viewName, res, loclas) {
    loclas = loclas || {};
    if (!loclas.error) {
        loclas.error = null;
    }
    res.render([VIEWS_PATH, viewName].join('\\'), loclas);
}
/**
 *
 */
router.get('/', (req, res) => {
    models.Category.find(function (err, items) {
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