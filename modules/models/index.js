let category = require('./category');
let author = require('./author');
let user = require('./user');
let story = require('./story');
let picture = require('./picture');
let addOn = require('./addon');

module.exports = {
    Category: category.Model,
    Author: author.Model,
    User: user.Model,
    Story: story.Model,
    Picture : picture.Model,
    AddOn : addOn.Model
};