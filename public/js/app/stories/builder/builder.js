;(function () {
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
