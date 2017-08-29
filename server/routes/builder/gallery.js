let models = require('models');
let router = require('express').Router();
let helpers = require('app-utils').helpers;
let Busboy = require('busboy');
let path = require('path');
let fs = require('fs');
let os = require('os');

const VIEWS_PATH = 'admin/gallery';

//
function renderView(viewName, res, loclas) {
    loclas = loclas || {};
    if (!loclas.error) {
        loclas.error = null;
    }
    res.render([VIEWS_PATH, viewName].join('\\'), loclas);
}
/**
 *
 */
router.get('/', (req, res) => {
    models.Picture
        .find()
        .limit(10)
        .skip(req.params.start || 0)
        .then(
            (items) => {
                renderView('list', res, {list: items});
            },
            (e) => {
                console.log(e)
            }
        );
});
/**
 *
 */
router.get('/new', (req, res) => {
    models.Category.find(function (err, items) {
        renderView('edit', res, {categories: items, item: {}});
    })
});
/**
 *
 */
router.get('/:id', (req, res) => {
    models.Picture.findOne({
            _id: req.params.id
        }, (err, item) => {
            if (item) {
                models.Category.find(function (err, categories) {
                    console.log(item.title)
                    renderView('edit', res, {categories: categories, item: item})
                })
            }

        }
    );

});
/**
 *
 */
router.post('/', (req, res) => {
    let busboy = new Busboy({headers: req.headers});
    let pictureData = {};
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        let fileName = [Date.now(), helpers.getFileExtension(filename)].join('.');
        console.log(fileName)
        console.log(fileName)
        console.log(fileName)
        console.log(fileName)
        console.log(fileName)
        console.log(fileName)
        console.log(fileName)
        let saveTo = path.join(helpers.getUploadURl(), fileName);
        let pictureStream = fs.createWriteStream(saveTo);

        function fillUrl(err, item) {
            if (err) {
                return res.send('error !!! ')
            }
            pictureData.location = saveTo;
            let properties = {
                title: pictureData.title,
                fileName: fileName,
                location: pictureData.location,
                thumbnail: pictureData.location,
                categories: [pictureData.category_id],
                owner: "5986640686f8d805b00137e8" // FIXME req.session.userID
            };
            let callback = function (err, item) {
                if (err) {
                    return res.send(err)
                }
                res.redirect('/admin/pictures');
            };
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            if (pictureData.id) {
                // FIXME remove old files
                models.Picture.findByIdAndUpdate(pictureData.id, {$set: properties}, callback);
            }
            else {
                new models.Picture(properties).save(callback);
            }
        };
        pictureStream.on('close', fillUrl);


        file.pipe(pictureStream);

    });
    busboy.on('finish', function () {
        //res.writeHead(200, {'Connection': 'close'});
        console.log(pictureData)
        console.log(pictureData)
        console.log(pictureData)
        console.log(pictureData)
        console.log(pictureData)

    });
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        pictureData[fieldname] = val;
        // console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    return req.pipe(busboy);
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