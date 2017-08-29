let models = require('models');
let router = require('express').Router();
/**
 *
 */
router.get('/', (req, res) => {
    models.AddOn
        .find({type: {$eq: req.query.type}})
        .then(
            (items) => {
                res.send(items);
            },
            (e) => {
                console.log(e)
            }
        );
});

/**
 *
 */
router.get('/types', (req, res) => {
    let supportedTypes = [
        {name: 'science', value: 'science'},
        {name: 'geo', value: 'geo'},
        {name: 'music', value: 'music'},
        {name: 'architecture', value: 'architecture'},
        {name: 'space', value: 'space'}
    ];
    res.send(supportedTypes);
});
module.exports = router;