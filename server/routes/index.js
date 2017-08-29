let storiesRouter = require('./stories');
let apiRouter = require('./api');
let adminRouter = require('./admin');
let builderRouter = require('./builder');
let accountsRouter = require('./accounts');
let categoriesRouter = require('./categories');
let companyRouter = require('./company');

let ordersRouter = require('./orders');
let router =  require('express').Router();
// admin router
router.use('/admin', adminRouter);
// api router
router.use('/api', apiRouter);
// account router
router.use('/accounts', accountsRouter);
// builder router
router.use('/builder', builderRouter);
// builder stories
router.use('/stories', storiesRouter);
// categories router
router.use('/categories', categoriesRouter);
// comapny and info router
router.use('/company', companyRouter);
// user orders routes
router.use('/orders', ordersRouter);

module.exports = router;