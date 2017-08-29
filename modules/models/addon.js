let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let utils = require('app-utils');
let addOnSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    fileName: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    categories: [{
        type: Schema.ObjectId,
        ref: 'Category'
    }],
    owner: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    type : {
        type: String,
        require: true
    }
});

let addOnModel = mongoose.model('AddOn', addOnSchema);
module.exports = {Schema: addOnSchema, Model: addOnModel};