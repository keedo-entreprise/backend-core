let models = require('../../../models');
let router = require('express').Router();
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
});
/**
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
    let story = {
        size: {
            height: 360,
            width: 470
        },
        pages: [
            {
                index: 0,
                "elements": [
                    {
                        type: "TEXT",
                        style: {
                            "z-index": 1,
                            "color": "white",
                            "width": "300px",
                            "height": "200px",
                            "fontName": "Joti+One",
                            "font-family": "Joti One, cursive",
                            "text-align": "right",
                            "backgroundColor": "transparent"
                        },
                        position: {
                            "left": "20",
                            "top": "20"
                        },
                        background: '/img/photo-1462332420958-a05d1e002413.jpg',
                        text: "Hello from the other side"
                    },
                    {
                        type: "COVER",
                        src: '/img/photo-1462332420958-a05d1e002413.jpg'
                    },
                    {
                        type: "SOUND",
                        src: 'https://www.nasa.gov/mp3/693857main_emfisis_chorus_1.mp3'
                    }
                ]
            },
            {
                index: 1,
                "elements": [
                    {
                        style: {
                            "color": "red",
                            "width": "200",
                            "height": "200",
                        },
                        type: "TEXT",
                        text: "Hello from the other side ",
                        position: {
                            "left": "120",
                            "top": "20"
                        }
                    },
                    {
                        type: "SOUND",
                        src: 'https://www.nasa.gov/mp3/693857main_emfisis_chorus_1.mp3'
                    }
                ]
            },
            {
                background: "/img/photo-1462332420958-a05d1e002413.jpg",
                index: 2,
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
                index: 3,
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
                index: 4,
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
    res.send(story);
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