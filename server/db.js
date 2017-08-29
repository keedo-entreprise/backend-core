let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let helpers = require('app-utils').helpers;
mongoose
    .connect(helpers.getDBUri(), {
        useMongoClient : true
    })
    .then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
            console.log('ok')
        },
        err => { /** handle initial connection error */
            throw new Error ('db is not reachable ');
        }
    );