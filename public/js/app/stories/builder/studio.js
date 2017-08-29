'use strict';
let _ = require('underscore');
let $ = require('jquery');
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