let router = require('express').Router();
const VIEWS_PATH = 'company';

router.use('/about', function (req, res) {
    //  res.cookie().locale
    let viewName = [VIEWS_PATH, 'about', 'index' ].join('\\');
    res.render(viewName);
});

module.exports = router;