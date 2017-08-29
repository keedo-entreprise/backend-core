let router = require('express').Router();
let categoriesRoutes = require('./categories');
let ordersRoutes = require('./orders');
let usersRoutes = require('./users');
let storiesRoutes = require('./stories');
let galleryRoutes = require('./gallery');
let addOnsRoutes = require('./addons');

router.use(function (req, res, next) {
    // if (!req.session.isUserAdmin) {
    //     res.redirect('/accounts/login')
    // }
    next();
});

const VIEWS_PATH = 'admin/';

function renderView(viewName, res, locals) {
    res.render([VIEWS_PATH, viewName].join('\\'), locals);
}
router.use('/manage', function (req, res) {
    renderView('manage', res)
});

router.use('/categories', categoriesRoutes);
router.use('/orders', ordersRoutes);
router.use('/users', usersRoutes);
router.use('/stories', storiesRoutes);
router.use('/gallery', galleryRoutes);
router.use('/addons', addOnsRoutes);

router.use(function (req, res) {
    renderView('manage', res)
});

module.exports = router;