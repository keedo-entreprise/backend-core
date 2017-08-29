let router = require('express').Router();
let storiesRoutes = require('./stories');
let galleryRoutes = require('./gallery');
router.use(function (req, res, next) {
    // if (!req.session.canEdit) {
    //     res.redirect('/accounts/login')
    //
    next();
});
router.use('/stories', storiesRoutes);
router.use('/gallery', galleryRoutes);


module.exports = router;