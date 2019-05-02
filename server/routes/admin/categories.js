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
router.get('/new', (req, res) => {
    renderView('new', res);
});
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
/**
 *
 */
router.post('/', (req, res) => {
    let categoryId = req.body.id;
    let categoryData = {
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
    };
    if (categoryId) {
        models.Category.findByIdAndUpdate(categoryId, { $set: categoryData }, function (err, response) {
            if (err) {
                renderView('edit', res, {error: err});
            }
            else {
                res.redirect('/admin/categories/');
            }
        })
    }
    else {
        models.Category.create(categoryData, function (err, response) {
            if (err) {
                renderView('new', res, {error: err});
            }
            else {
                res.redirect('/admin/categories/');
            }
        })
    }


});

module.exports = router;