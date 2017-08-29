;(function () {
    'use strict';
    // AddOnsToolbar
    (function () {
        /**
         *
         * @constructor
         */
        function AddonsToolbar() {
            this.init();
        };

        /**
         *
         * @type {{}}
         */
        AddonsToolbar.prototype = _.extend({}, Studio.BaseToolbarPrototype, {
            /**
             *
             */
            selector: '#toolbar__addons',
            /**
             *
             */
            bindEvents: function () {
                this.$el.find('[data-action]').click(function () {
                    console.log($(this).data('action'));
                    $(Studio.getCurrentActiveElement());//
                });
            }
        });
        Studio.AddonsToolbar = AddonsToolbar;
    })();


}());
