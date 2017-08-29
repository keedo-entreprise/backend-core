// TextToolbar
;(function () {
    "use strict"
    /**
     *
     * @constructor
     */
    function TextToolbar() {
        this.init();
    };

    /**
     *
     * @type {{}}
     */
    TextToolbar.prototype = _.extend({}, Studio.BaseToolbarPrototype, {
        selector: '#toolbar__text',
        /**
         *
         */
        bindEvents: function () {
            this.$el.find('[data-action]').click(function () {
                let action = $(this).data('action').split(':');
                let property = action[0];
                let value = action[1];
                switch (action) {
                    case "text-align":

                        break;
                }
                $(Studio.getCurrentActiveElement()).css(property, value);//
            });
        }
    });
    Studio.TextToolbar = TextToolbar;
})();