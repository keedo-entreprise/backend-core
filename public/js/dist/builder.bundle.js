webpackJsonp([0],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, screenfull) {//
__webpack_require__(24);

__webpack_require__(25);

// toolbar
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);

// sidebar
__webpack_require__(31);

// page
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);

// main app
__webpack_require__(35);


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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

let _ = __webpack_require__(1);
let $ = __webpack_require__(0);
window.Studio = {};
_.extend(Studio, {
    /**
     *
     * @param element
     */
    setCurrentActiveElement: function (element) {
        Studio._currentActiveElement = element;
    },
    /***
     *
     * @returns {*}
     */
    getCurrentActiveElement: function () {
        return Studio._currentActiveElement;
    }
})
// console.log ("extending");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {;(function () {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $) {// TextToolbar
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(0)))

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $) {;(function () {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(0)))

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $) {// TextToolbar
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(0)))

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {;(function () {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {;(function () {
    'use strict';
    /**
     *
     * @param params
     * @constructor
     */
    function SideBar(params) {
        $(document).ready(function () {
            $("#accordion").accordion({heightStyle: "content", collapsible: true});
            $('.sideBar_component').each(function () {
                $(this).perfectScrollbar();
            });
        })
    };

    // Export
    Studio.SideBar = SideBar ;
    new SideBar();
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// require /app/stories/builder/constants.js
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, _) {;(function () {

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

            // create  a new page
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1)))

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

;(function () {

    /**
     *
     * @param viewer
     * @param pageComponents
     */
    function Spread(viewer, pageComponents) {

    }
    Spread.prototype = {
    };
    Studio.Spread = Spread;
}());


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $, screenfull) {;(function () {
    'use strict';
    /**
     *
     * @param params
     * @constructor
     */
    function Builder(params) {
        if (!params) {
            throw new Error('No args are provided');
        }
        if (!_.isObject(params)) {
            params = {id: params};
        }
        this.init(params);
    }

    //
    Builder.prototype = {
        _$thumbnailsInnerContainer: null,
        pagesCount: 0,
        currentPage: 0,
        pages: [],
        spreads: [],
        _storyInfo: null,
        /**
         *
         * @param params
         */
        init: function (params) {
            this.storyId = params.id;
            new Studio.BuilderToolbar(this);
            this._loadStory();
            this._attachEvents();
        },
        /**
         * Load element from api
         */
        _loadStory: function () {
            $.get([API_HOST, 'stories', this.storyId].join('/')).then(function (response) {
                this._initBuilder(response);
                this.loadStoryPages(this.currentPage);
            }.bind(this));
        },

        /**
         * Attach events
         */
        _attachEvents: function () {
            $.Topic(Studio.EVENTS.NEW_PAGE).subscribe(function () {
                this.addPage()
            }.bind(this))
        },
        /**
         * Load element from api
         */
        loadStoryPages: function (page) {
            //
            $.get([API_HOST, 'stories', this.storyId, 'pages', this.currentPage].join('/')).then(function (response) {
                console.log(response);
                this.addFront();
                _.each([1, 2, 3, 4, 5, 6], function () {
                    this.addPage()
                }.bind(this));
                this.addBack();
            }.bind(this));
        },
        /**
         *
         * @param story
         */
        _initBuilder: function (story) {
            this._storyInfo = story;
            this._initThumbnailsContainer();
        },
        /**
         *
         */
        getPageElement: function () {
            return $('#previewContainer');
        },
        /**
         *
         * @param pages
         */
        _initThumbnailsContainer: function (pages) {
            let $thumbnailsContainer = $('#preview__thumbnailsContainer');
            $thumbnailsContainer.width($($thumbnailsContainer).parent().width());
            this._$thumbnailsInnerContainer = $('#preview__thumbnailsInnerContainer');
            this._$thumbnailsInnerContainer.width(0);
            $thumbnailsContainer.perfectScrollbar();
        },
        /**
         *
         */
        addBack: function (page) {
            this.pages.push(new Studio.Page(this, page, {title: this._storyInfo.title, pageIndex: -1, isBack: true}));
            //this.addPageThumbnail(page);
        },
        /**
         *
         */
        addFront: function (page) {
            this.pages.push(new Studio.Page(this, page, {title: this._storyInfo.title, pageIndex: -1, isFront: true}));
            //this.addPageThumbnail(page);
        },
        /**
         *
         */
        addPage: function (page) {
            this.pages.push(new Studio.Page(this, page, {pageIndex: this.pagesCount++}));
            //this.addPageThumbnail(page);
        },
        /**
         *
         */
        addPageThumbnail: function (page) {
            let oldWidth = this._$thumbnailsInnerContainer.width();
            let $item;
            $item = $('<div></div>').addClass('page__thumbnail');
            $item.append($('<img/>').attr('src', url));
            $item.data('id', this.pagesCount);
            $item.click(function () {
                $.Topic(Studio.EVENTS.CLICK_THUMBNAIL_PAGE).publish($(this).data('id'));
            });
            this._$thumbnailsInnerContainer.append($item);
            this._$thumbnailsInnerContainer.width(oldWidth + 120);
            console.log(oldWidth);
        }
    };


    $('button#preview_btn').click(function () {
        if (screenfull.enabled) {
            screenfull.request($('#previewContainer__inner')[0]);
        }
    })
    Studio.Builder = Builder;
    new Builder({id: Helpers.getWindowId()});
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(0), __webpack_require__(2)))

/***/ })

},[23]);