let router =  require('express').Router();
router.use('/v0', require('./v0'));
router.use(function (req, res){
    res.sendStatus(500);
});

module.exports = router;