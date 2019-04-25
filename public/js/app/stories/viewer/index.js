'use strict';
//
window.Viewer = {};
let _ = require('underscore');
let $ = require('jquery');
require('perfect-scrollbar');
require('./constants.js');
let Page = require('./page.js');
//require('./../common/helpers');

const PAGE_ID_SELECTOR = '#page_content';
const THUMBNAILS_ID_SELECTOR = '#thubmnails_content';

let $page;
let $thumbnails_container;
let pagesInstances = [];
let $pScroll;
/**
 * Render a signle page
 * @param index
 * @private
 */
let _renderPage = function (index) {
    let $page_dom = pagesInstances[index].page;
    $page.empty();
    $page.append($page_dom);
};
/**
 *
 * @param story
 */
let buildStory = function (story) {
    let size = story.size;
    $thumbnails_container = $(THUMBNAILS_ID_SELECTOR);
    $page = $(PAGE_ID_SELECTOR);
    let $thumbnail;
    let pageInstance;
    _.each(story.pages, function (entry) {
        pageInstance = new Page(entry, story);
        $thumbnail = pageInstance.thumbnail;
        $thumbnails_container.append($thumbnail);
        pagesInstances.push(pageInstance);
    });
    $.Topic(Viewer.EVENTS.THUMBNAIL_CLICK).subscribe(function (data) {
        _renderPage(data.index);
    });
    _renderPage(0);
    // set perfect scroll bar to navigator
    $pScroll = $thumbnails_container.perfectScrollbar();
    $pScroll.update();


    //
    screenfull.on('change', () => {
        console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
    });
};
$(document).ready(function () {
    // get the id
    // FIXME, get it from html rendered from server
    let id = Helpers.getWindowId();
    // get all pages of current stories
    $.get([API_HOST, 'stories', id].join('/')).then(function (response) {
        // build pages
        buildStory(response);
    }.bind(this));
});
