let router =  require('express').Router();
router.use('/stories', require('./stories'));
router.use('/categories', require('./categories'));
router.use('/addons', require('./addons'));
router.use(function (req, res){
    res.sendStatus(500);
});
module.exports = router;