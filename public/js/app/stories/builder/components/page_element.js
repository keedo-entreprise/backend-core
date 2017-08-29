// require /app/stories/builder/constants.js
// require /app/stories/builder/index.js

;(function () {
    /**
     *
     * @param properties
     */
    function PageElement(properties) {
        this.constructor(properties);
    }

    PageElement.prototype = {
        $el: null,
        getDomElement: function () {
            return this.$el;
        },
        properties: null,
        getProperties: function () {
            return this.properties;
        },
        /**
         *
         * @param properties
         */
        constructor: function (properties) {
            this.properties = properties;
            this.initDOMElement();
        },
        /**
         *
         * @param properties
         * @returns {*|jQuery|HTMLElement}
         */
        initDOMElement: function () {
            let properties = this.getProperties();
            let tag = properties.tag || 'div';
            console.log(properties);
            properties.style = properties.style || {};
            properties.position = properties.position || {};
            let html = ['<', tag, '>', '</', tag, '>'].join('');
            let $element = $(html);
            $element
                .css({
                    top: (properties.position.top || 0 ) + 'px',
                    left: (properties.position.left || 0) +'px',
                    color : properties.style.color

                }).addClass(['page__element'].join(' '));
            let type = properties.type.toUpperCase();
            switch (type) {
                case  Studio.ELEMENTS_TYPE.TEXT :
                    $element.addClass('page_text').html(properties.text);
                    break;
                case Studio.ELEMENTS_TYPE.BACKGROUND :
                    $element
                        .addClass('page_background')
                        .append($('<img/>')
                            .attr('src', properties.background));
                    break;
                default:
                    break;
            }
            this.$el = $element;
        },
        toJSON: function () {

        },
        /**
         *
         * @param properties
         * @returns {*|jQuery|HTMLElement}
         * @private
         */
        _bindEvent: function (properties) {
        },
    }
    Studio.PageElement = PageElement;
}());
