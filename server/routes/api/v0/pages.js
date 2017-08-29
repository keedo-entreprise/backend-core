let models = require('models');
let router = require('express').Router({mergeParams: true});
let helpers = require('app-utils').helpers;
let story = {
    size: {
        height: 520,
        width: 740
    },
    background: {
        url: '/img/photo-1462332420958-a05d1e002413.jpg'
    },
    cover: {
    },
    spreads: [{
        background: "/img/photo-1462332420958-a05d1e002413.jpg",

    }, {
        background: "/img/lostmyname-07.jpg",

    }, {
        background: "/img/lostmyname-08.jpg",

    }],
    pages: [
        {
            background: "/img/photo-1462332420958-a05d1e002413.jpg",
            "elements": [
                {
                    style: {
                        "color": "red",
                        "width": "200",
                        "height": "200",
                    },
                    type: "text",
                    text: "Hello from the other side ",
                    position: {
                        "left": "120",
                        "top": "20"
                    }
                }
            ]
        },
        {
            background: "/img/photo-1462332420958-a05d1e002413.jpg",
            "elements": [
                {
                    style: {
                        "color": "red",
                        "width": "200",
                        "height": "200",
                    },
                    type: "text",
                    text: "Hello from the other side ",
                    position: {
                        "left": "250",
                        "top": "20"
                    }
                }
            ]
        },
        {
            background: "/img/photo-1462332420958-a05d1e002413.jpg",
            "elements": [
                {
                    style: {
                        "color": "red",
                        "width": "200",
                        "height": "200",
                    },
                    type: "text",
                    text: "next from the other side ",
                    position: {
                        "left": "250",
                        "top": "20"
                    }
                }
            ]
        },
        {
            background: "/img/photo-1462332420958-a05d1e002413.jpg",
            "elements": [
                {
                    style: {
                        "color": "red",
                        "width": "200",
                        "height": "200",
                    },
                    type: "text",
                    text: "next from the right side ",
                    position: {
                        "left": "250",
                        "top": "20"
                    }
                }
            ]
        }

    ]
};

/**
 *
 */
router.get('/', (req, res) => {
    console.log(req.params);
    res.send(story);

});
/**
 *
 */
router.get('/:page_id', (req, res) => {
    console.log(req.params);
    models.Story
        .findOne({_id: req.params.id})
        .then(
            (item) => {
                res.send(item);
            },
            (e) => {
                res.send({page: page});
                //res.sendStatus(404).send("not found");
            }
        );

});
// Make export
module.exports = router;