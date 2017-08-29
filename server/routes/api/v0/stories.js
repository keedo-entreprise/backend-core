let models = require('models');
let router = require('express').Router();
let helpers = require('app-utils').helpers;
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
                res.send(items);
            },
            (e) => {
                console.log(e)
            }
        );
});/**
 *
 */
router.get('/top', (req, res) => {
    models.Story
        .find()
        .limit(10)
        .skip(req.params.start || 0)
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
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    models.Story
        .findOne({_id : req.params.id})
        .then(
            (item) => {
                res.send(item);
            },
            (e) => {
                res.send({
                    pagesCount: 6,
                    thumbnails : [
                        {
                            page : 1,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwjoKQAVMDMt1hjPpyRqGtPI9rGDtzF6KbnJTVdBSeM-ogKFuzg'
                        },
                        {
                            page : 2,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfukTkeWm1gGZJfaPRp9v3Xzt05u9wXqxzvX4wbMOPMKsVH1rJXw'
                        },

                        {
                            page : 3,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfukTkeWm1gGZJfaPRp9v3Xzt05u9wXqxzvX4wbMOPMKsVH1rJXw'
                        },

                        {
                            page : 4,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfukTkeWm1gGZJfaPRp9v3Xzt05u9wXqxzvX4wbMOPMKsVH1rJXw'
                        },

                        {
                            page : 5,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfukTkeWm1gGZJfaPRp9v3Xzt05u9wXqxzvX4wbMOPMKsVH1rJXw'
                        },

                        {
                            page : 6,
                            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfukTkeWm1gGZJfaPRp9v3Xzt05u9wXqxzvX4wbMOPMKsVH1rJXw'
                        }
                    ]
                });
            }
        );

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