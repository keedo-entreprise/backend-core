;(function () {

    /**
     *
     * @param viewer
     * @param pageComponents
     * @param options
     */
    function Page(viewer, pageComponents, options) {
        this._init(viewer, pageComponents, options);
    }

    Page.prototype = {
        pageElements: [],

        /**
         *
         * @param viewer
         * @param pageComponents
         * @param options
         * @private
         */
        _init: function (viewer, pageComponents, options) {
            let $container = viewer.getPageElement();
            let $page = $('<div></div>').addClass('page');
            this._buildPage($page, $container, options);
        },
        /**
         *
         * @param $page
         * @param $container
         * @param options
         * @private
         */
        _buildPage: function ($page, $container, options) {
            this.$el = $page;
            $page.appendTo($container);
            if (!(options.isBack || options.isFront)) {
                let pageIndex = options.pageIndex;
                if (pageIndex > 0) {
                    if (pageIndex % 2 === 0) {
                        $page.addClass('page__right');
                        $('<div class="page__separator"></div>').appendTo(this.$el.parent());
                    }
                    else {
                        $page.addClass('page__left');
                    }
                }
                this._buildPageElements([{
                    'type': 'background',
                    'background': 'https://images.unsplash.com/photo-1494523809379-5f04ec5e72b6?dpr=1&auto=format&fit=crop&w=1080&h=1620&q=80&cs=tinysrgb&crop=',
                },
                    {
                        type: 'text',
                        text: 'Hello from the other side !',
                        style: {
                            top: 20,
                            left: 50
                        }
                    },
                    {
                        type: 'text',
                        text: 'REd from the other side !',
                        style: {
                            top: 20,
                            left: 50,
                            color: 'red'
                        }
                    }]);
            }
            else {
                $page.addClass('page__cover');
                if (options.isBack) {
                    this._buildPageBack(options);
                }
                else {
                    this._buildPageFront(options);
                }
            }
        },
        /**
         *
         * @private
         */
        _buildPageBack: function (options) {
            this.$el.addClass('page__back');
            this.pageType = Studio.PAGES_TYPE.BACK;
            // handle element of back element
        },
        /**
         *
         * @private
         */
        _buildPageFront: function (options) {
            this.$el.addClass('page__front');
            this.pageType = Studio.PAGES_TYPE.BACK;
            let $title = $('<div></div>').addClass('story__title').html(options.title).appendTo(this.$el);
            //let $background = $('<img></img>').html(options.title);
            let $avatar = $('<div></div>').addClass('user__avatar').appendTo(this.$el);
            // handle element of back element
            $avatar.draggable({
                stop : function (event, ui) {
                    console.log(ui)
                }
            });
            $title.draggable({
                stop : function (event, ui) {
                    console.log(ui)
                }
            });
        },
        /**
         *
         */
        toJSON: function () {

        },
        /**
         *
         * @param elements
         * @returns {*|jQuery|HTMLElement}
         * @private
         */
        _buildPageElements: function (elements) {
            _.each(elements, function (element) {
                this._addPageElement(element);
            }.bind(this));
        },

        /**
         *
         * @param elementProperties
         * @returns {*|jQuery|HTMLElement}
         * @private
         */
        _addPageElement: function (elementProperties) {
            let pageElement = new Studio.PageElement(elementProperties);
            this.pageElements.push(pageElement);
            let $element = pageElement.getDomElement();
            this.$el.append($element);
            // bind events
            $element.attr({'contenteditable': "true"})
            $element.draggable({
                start: function (event, ui) {
                    console.log("drag started")
                }
            });
            $element.click(function (e) {
                e.stopImmediatePropagation();
                Studio.setCurrentActiveElement(this);
                $.Topic(Studio.EVENTS.PAGE_ELEMENT_CLICK).publish(this, elementProperties);
            });
            return $element;
            /*
             https://images.unsplash.com/photo-1471086569966-db3eebc25a59?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=
             */
        },
    }
    Studio.Page = Page;
}());
