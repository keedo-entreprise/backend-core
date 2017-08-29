// require /app/stories/builder/index.js
;(function () {
    Studio.EVENTS = {
        CLICK_WINDOW: "CLICK_WINDOW",
        CLICK_THUMBNAIL_PAGE : "CLICK_THUMBNAIL_PAGE",
        NEW_PAGE : "NEW_PAGE",
        PAGE_ELEMENT_CLICK : "PAGE_ELEMENT_CLICK"
    };
    Studio.ELEMENTS_TYPE = {
        TEXT : "TEXT",
        IMAGE : "IMAGE",
        BACKGROUND : 'BACKGROUND'
    };

    Studio.PAGES_TYPE = {
        BACK : "BACK",
        FRONT : "FRONT",
        FIRST : 'FIRST',
        LAST : 'LAST'
    };
}());
