// TextToolbar
;(function () {
    "use strict"
    /**
     *
     * @constructor
     */
    function ImageToolbar() {
        // register modal component
        Vue.component('modal', {
            template: '#modal_template'
        });

// start app
        this._patternsModal = new Vue({
            el: '#patterns_modal',
            data: {
                showModal: false,
                patterns: []
            },
            methods: {
                toggle: function () {
                    this.showModal = !this.showMoal
                }
            }
        });
        this.init();
    };

    /**
     *
     * @type {{}}
     */
    ImageToolbar.prototype = _.extend({}, Studio.BaseToolbarPrototype, {
        selector: '#toolbar__image',
        /**
         *
         */
        bindEvents: function () {
            console.log("bindEvents")
            this.$el.find('[data-action]').click(function (el) {
                let action = $(el.currentTarget).data('action');
                switch (action) {
                    case "pattern":
                        this._patternsModal.toggle();
                        $.get([API_HOST, 'addons', 'patterns'].join('/')).then(function (response) {
                            this._patternsModal.patterns = response;
                        }.bind(this));
                        //http://localhost:5000/api/v0//
                        break;
                }
                //$(Studio.getCurrentActiveElement()).css(property, value);//
            }.bind(this));
        }
    });
    Studio.ImageToolbar = ImageToolbar;
})();