'use strict';
//
let _ = require('underscore');
let $ = require('jquery');
require('howler');
require('./constants');

let THUMBNAIL_CLASS_NAME = 'app-viewer-thumbnail';
let PAGE_CLASS_NAME = 'app-viewer-page';
let ELEMENT_CLASS = 'element';
let ELEMENT_BACKGROUND_CLASS = 'background';
/**
 *
 * @param page
 * @constructor
 */
let Page = function (page, story) {
    this._story = story;
    this._page = page;

    let $thumbnail = this._buildThumbnail();

    let $page = this._$page = this._buildPage();

    _.each(page.elements, function (entry) {
        this._buildElement(entry);
    }.bind(this));
    $page.find('.sound').click(function (event) {
        let soundId = $(event.currentTarget).data('sound');
        this._sounds[soundId].play();
    }.bind(this));

    $page.dblclick(function () {
        if (screenfull.enabled) {
            $(this).addClass('fullscreen');
            screenfull.request($page[0]);
        }
    });
    return {
        thumbnail: $thumbnail,
        page: $page
    }
};
Page.prototype = {
    _page: null,
    _story: null,
    _$page: null,
    _sounds: {},
    /**
     *
     * @private
     */
    _buildThumbnail: function () {
        let page = this._page;
        // build thumbnail
        let $thumbnail = $('<div>' + page.index + '</div>');
        $thumbnail.addClass(THUMBNAIL_CLASS_NAME);
        $thumbnail.click(function () {
            $.Topic(Viewer.EVENTS.THUMBNAIL_CLICK).publish({index: page.index});
        });
        return $thumbnail;
    },
    /**
     *
     * @private
     */
    _buildElement: function (entry) {
        let $element = $('<div></div>');
        $element.addClass(ELEMENT_CLASS);
        switch (entry.type) {
            case Viewer.ELEMENTS_TYPE.TEXT :
                $element.css(entry.style);
                $element.html(entry.text);
                if (entry.style && entry.style.fontName) {
                    WebFont.load({
                        google: {
                            families: [entry.style.fontName]
                        }
                    });
                }
                break;
            case Viewer.ELEMENTS_TYPE.COVER:
                $element.addClass('cover');
                $element.css('background', 'url("' + entry.src + '")');
                break;
            case Viewer.ELEMENTS_TYPE.SOUND:
                let soundId = Date.now();
                $element.data('sound', soundId);
                $element.append('<i class="icon-sound"></i>');
                $element.addClass('sound');
                this._sounds[soundId] = new Howl({
                    src: [entry.src]
                });
        }
        this._$page.append($element);
    },
    /**
     *
     * @private
     */
    _buildPage: function () {
        let story = this._story;
        // build page
        let $page = $('<div>' + '</div>');
        $page.css({
            height: story.size.height,
            width: story.size.width
        });
        $page.addClass(PAGE_CLASS_NAME);
        return $page;

    }
}
;
module.exports = Page;