let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let authorSchema = mongoose.Schema({
    verified: Boolean,
    information : Object,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    language : String
});

let authorModel = mongoose.model('Author', authorSchema);

module.exports = {Schema : authorSchema, Model :  authorModel}