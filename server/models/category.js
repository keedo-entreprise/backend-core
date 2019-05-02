let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Local imports
let AuthorSchema = require('./author.js');

let categorySchema = mongoose.Schema({
    name :  {
        type: String,
        unique: true
    },
    createdBy: {
        ref: 'User',
        type: Schema.Types.ObjectId
    },
    locales: [{
        locale: String,
        value: String
    }],
});

let categoryModel = mongoose.model('Category', categorySchema);
module.exports = {Schema: categorySchema, Model: categoryModel}