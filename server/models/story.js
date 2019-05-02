let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let storySchema = mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    categories: [{
        type: Schema.ObjectId,
        ref: 'Category'
    }],
    authors: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    language: String,
    thumbnail: String,
    likesCount: {type: Number, default: 0},
    ordersCount: {type: Number, default: 0},
    viewsCount: {type: Number, default: 0},
    isPublished: {type: Boolean, default: false},
    content: {
        type: JSON, default: {
            "pages": [],
            "pagesCount": 0
        }
    },
});

let storyModel = mongoose.model('Story', storySchema);

module.exports = {Schema: storySchema, Model: storyModel}