let models = require('models');
let router = require('express').Router();
/**
 *
 */
router.get('/', (req, res) => {
    models.Category
        .find()
        .then(
            (items) => {
                res.send(items);
            },
            (e) => {
                console.log(e)
            }
        );
});

module.exports = router;