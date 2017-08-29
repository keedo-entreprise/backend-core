let router =  require('express').Router();
router.use('/stories', require('./stories'));
router.use('/categories', require('./categories'));
router.use('/addons', require('./addons'));
router.use('/stories/:id/pages', function (req, res, next){
    next();
}, require('./pages'));
router.use(function (req, res){
    res.sendStatus(500);
});
module.exports = router;