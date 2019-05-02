let models = require('../../models');
let router = require('express').Router();
let helpers = require('../../utils/helpers') ;
let Busboy = require('busboy');
let path = require('path');
let fs = require('fs');
var moniker = require('moniker');
const VIEWS_PATH = 'admin/addons';
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
    renderView('index', res);
});
/**
 *
 */
router.post('/upload', (req, res) => {
    let busboy = new Busboy({headers: req.headers});
    let addonAd = {};
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        let fileName = [Date.now(), helpers.getFileExtension(filename)].join('.');
        let saveTo = path.join(helpers.getAddOnsUploadDirsURl(),  fileName);
        let pictureStream = fs.createWriteStream(saveTo);

        function fillUrl(err, item) {
            if (err) {
                return res.send('error !!! ')
            }
            addonAd.location = saveTo;
            let properties = {
                title: moniker.choose(),
                fileName: fileName,
                location: addonAd.location,
                thumbnail: addonAd.location,
                type : addonAd.type,
                categories: [addonAd.category_id],
                owner: "5986640686f8d805b00137e8" // FIXME req.session.userID
            };
            let callback = function (err, item) {
                if (err) {
                    return res.send(err)
                }
                res.send("ok")
            };
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            console.log(properties)
            if (addonAd.id) {
                // FIXME remove old files
                models.AddOn.findByIdAndUpdate(addonAd.id, {$set: properties}, callback);
            }
            else {
                new models.AddOn(properties).save(callback);
            }
        };
        pictureStream.on('close', fillUrl);

        file.pipe(pictureStream);
    });
    busboy.on('finish', function () {
        //res.writeHead(200, {'Connection': 'close'});
        console.log(addonAd)
        console.log(addonAd)
        console.log(addonAd)
        console.log(addonAd)
        console.log(addonAd)

    });
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        addonAd[fieldname] = val;
        // console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    return req.pipe(busboy);
});
module.exports = router;