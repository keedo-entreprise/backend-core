let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pictureSchema = mongoose.Schema({
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
    }
});

let pictureModel = mongoose.model('Picture', pictureSchema);
module.exports = {Schema: pictureSchema, Model: pictureModel};