let models = require('../../models');
let router = require('express').Router();

const VIEWS_PATH = 'admin/categories';

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
    models.Category.findAll(function (err, items) {
        renderView('list', res, {list: items});
    })
});
/**
 *
 */
router.get('/new', (req, res) => {
    renderView('new', res);
});
/**
 *
 */
router.post('/new', (req, res) => {
    models.Category.create({
        name: req.body.name_en,
        createdBy: "5986640686f8d805b00137e8", // FIXME req.session.userId,
        locales: [
            {
                locale: 'fr',
                value: req.body.name_fr
            },
            {
                locale: 'ar',
                value: req.body.name_ar
            }
        ]
    }, function (err, response) {
        if (err) {
            renderView('new', res, {error: err});
        }
        else {
            res.redirect('/admin/categories/');
        }
    })

});

module.exports = router;