;(function () {
    Studio.BaseToolbarPrototype = {
        /**
         *
         */
        init: function () {
            this.$el = $(this.selector);
            // all events
            this.$el.find('[data-toolbar-for]').each(function (index, element) {
                this.bindPopper(element);
            }.bind(this));
            // to hide popups
            $.Topic(Studio.EVENTS.CLICK_WINDOW).subscribe(this.hideAllPoppers.bind(this));
            $.Topic(Studio.EVENTS.CLICK_WINDOW).subscribe(this.hide.bind(this));
            $.Topic(Studio.EVENTS.PAGE_ELEMENT_CLICK).subscribe(this.hide.bind(this));

            this.bindEvents();
        },
        /**
         *
         */
        hide: function () {
            this.$el.hide();
        },
        /**
         *
         */
        show: function () {
            this.$el.show();
        },
        /**
         *
         */
        hideAllPoppers: function () {
            this.$el.find('.toolbar__popover').removeClass('visible');
        },

        /**
         *
         * @param button
         */
        bindPopper: function (button) {
            var selector;
            selector = $(button).data('toolbar-for');
            button.$popper = this.$el.find("[data-toolbar='" + selector + "']:eq(0)");
            $(button).click(function (event) {
                this.hideAllPoppers();
                event.currentTarget.$popper.toggleClass('visible');
            }.bind(this));
        }

    };
})()