let models = require('../../models');
let router = require('express').Router();

const VIEWS_PATH = 'admin/stories';

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
    models.Story
        .find()
        .limit(10)
        .skip(req.params.start || 0)
        .then(
            (items) => {
                renderView('list', res, {list: items});
            },
            (e) => {
                console.log(e)
            }
        );
});
/**
 *
 */
router.get('/new', (req, res) => {
    models.Category.find(function (err, items) {
        renderView('new', res, {categories: items});
    })
});
/**
 *
 */
router.get('/:id', (req, res) => {
    models.Story
        .findById(req.params.id,
            (err, item) => {
                if (item) {
                    renderView('view', res, {item: item})
                }
            }
        );

});
/**
 *
 */
router.post('/new', (req, res) => {
    let categoryId = req.body.category_id;
    let title = req.body.title;
    let story = new models.Story({
        title: title,
        categories: [categoryId],
        owner: req.session.userId
    });
    story.save(function (err, item) {
        if (err) {
            models.Category.find(function (err, items) {
                renderView('new', res, {categories: items});
            })
        } else {
            res.redirect(`/admin/stories/${item.id}/`)
        }
    })
});
/**
 *
 */
router.delete('/:id', (req, res) => {
    // check for own
});
/**
 *
 */
router.post('/', (req, res) => {
    // save
});

module.exports = router;