;(function () {
    /**
     *
     * @param params
     * @constructor
     */
    function BuilderToolbar(params) {
        this._addOnToolbar = new Studio.AddonsToolbar();
        this._textToolbar = new Studio.TextToolbar();
        this._imageToolbar = new Studio.ImageToolbar();
        $.Topic(Studio.EVENTS.PAGE_ELEMENT_CLICK).subscribe(this.onPageElementClick.bind(this));
        $.Topic(Studio.EVENTS.CLICK_WINDOW).subscribe(this.showMainToolbar.bind(this));
        $('[data-action="new-page"]').click(function () {
            $.Topic(Studio.EVENTS.NEW_PAGE).publish();
        });
        $('#toolbar').click(function (event) {
            event.stopPropagation();
        });
    }

    BuilderToolbar.prototype = {
        /**
         * Fired once an element of page has been clicked
         */
        onPageElementClick: function (dom, element) {
            let type = element.type.toUpperCase() ;
            if (type === Studio.ELEMENTS_TYPE.TEXT) {
                this._textToolbar.show();
            } else if (type === Studio.ELEMENTS_TYPE.IMAGE || type === Studio.ELEMENTS_TYPE.BACKGROUND) {
                this._imageToolbar.show();
            }
            else {
                this._addOnToolbar.show();
            }
        },
        showMainToolbar : function () {
            this._addOnToolbar.show();
        }
    };
    // Export
    Studio.BuilderToolbar = BuilderToolbar;
})();