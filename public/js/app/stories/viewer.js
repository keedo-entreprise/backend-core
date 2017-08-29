'use strict';
//
let _ = require('underscore');
let $ = require('jquery');
require('perfect-scrollbar');


require('jquerypp');
require('jquery.bookblock');


require('./builder/studio.js');
require('./builder/constants.js');
require('./builder/constants.js');
require('./builder/components/page_element.js');

let initViewer = function (response) {
    let story = response.size;
    let $container = $('#book_viewer');
    let $page;
    let $spread;
    let page;
    let pageElement;

    function appendSpreadPage($spread, page) {
        $page = $('<div/>').addClass('book__spreadPage').appendTo($spread);
        _.each(page.elements, function (element) {
            pageElement = new Studio.PageElement(element);
            $page.append(pageElement.getDomElement());
        })
    }

    var _spreads = [];
    for (let i = 0; i < response.pages.length / 2; i++) {
        $spread = $('<div/>').addClass('book__spread').addClass("bb-item").appendTo($container);
        if (response.spreads && response.spreads[i].background) {
            //$spread.css("background-image", "url('" + response.spreads[i].background + "')");
            $spread.append($('<img/>').addClass('spread__background').attr('src', response.spreads[i].background));
        }
        _spreads.push($spread);
        appendSpreadPage($spread, response.pages[i * 2]);
        appendSpreadPage($spread, response.pages[i * 2 + 1]);
    }
    $container.css({
        'height': story.height,
        'width': story.width
    });
    // #book_viewer
    $container.find('img').css({
        'max-height': story.height,
        'max-width': story.width
    });
    $container.bookblock();
    $container.perfectScrollbar();
    $container.dblclick(function () {
        if (screenfull.enabled) {

            screenfull.request($container[0]);
        }
    });
    screenfull.on('change', function () {
        if (screenfull.isFullscreen) {
            $container.addClass('fullscreen')
        }
        else {
            $container.removeClass('fullscreen');
        }
    });

    $('.nav').click(function (e) {
        $container.bookblock($(this).data('nav'));
        // Cancel the default action
        e.preventDefault();
    });
};
$(document).ready(function () {
    // get the id
    let id = Helpers.getWindowId();
    // get all pages of current stories
    $.get([API_HOST, 'stories', id, 'pages'].join('/')).then(function (response) {
        // build pages
        initViewer(response);
    }.bind(this));
});
