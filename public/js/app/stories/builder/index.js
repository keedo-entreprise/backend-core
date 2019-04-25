//
require('./studio.js');

require('./constants.js');

// toolbar
require('./toolbar/base.js');
require('./toolbar/text.js');
require('./toolbar/addons.js');
require('./toolbar/image.js');
require('./toolbar/view.js');

// sidebar
require('./sidebar/index.js');

// page
require('./components/page_element.js');
require('./components/page.js');
require('./components/spread.js');

// main app
require('./builder.js');


$(document).ready(function () {
    console.log('xxxxxxx');
    $('button#preview_btn').click(function () {
        if (screenfull.enabled) {
            screenfull.request($('#previewContainer')[0]);
        }
    });
    $('#previewContainer').dblclick(function () {
        if (screenfull.enabled) {
            screenfull.request($('#previewContainer')[0]);
        }
    });
    $('#previewContainer').perfectScrollbar();

    $(document).on('click', function (e) {
        if (e.currentTarget == document) {
            $.Topic(Studio.EVENTS.CLICK_WINDOW).publish();
        }
        console.log(e.currentTarget);
    });
});
