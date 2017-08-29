'use strict';
//
let _ = require('underscore');
let $ = require('jquery');
let Dropzone = require('dropzone');
Dropzone.autoDiscover = false;
$(document).ready(function () {
    let listItemsVue;
    let $selectType = $('select[name="type"]');

    /**
     *
     * @returns {jQuery}
     */
    function getSelectedType() {
        return $selectType.find(":selected").text()
    }

    $selectType.on('change', getList);
    function initDropZone() {
        // Dropzone class:
        let $dropZone = $("div#dropzone");
        $dropZone.dropzone({
            url: $('form:eq(0)').attr('action'),
            init: function (e) {
                // Event to send your custom data to your server
                this.on("sending", function (file, xhr, data) {

                    // First param is the variable name used server side
                    // Second param is the value, you can add what you what
                    // Here I added an input value
                    data.append("type", getSelectedType());
                });

            }
        });
        $dropZone.on("complete", function (file) {
            $dropZone.removeFile(file);
        });
    }

    initDropZone();

    function initVueList() {
        listItemsVue = new Vue({
            el: '#list_items',
            data: {
                addOnsHostUrl: window.ADDONS_UPLOADS_HOST,
                list: []
            },
        });
    }

    initVueList();
    /**
     *
     */
    function getList() {
        let url = [API_HOST, 'addons'].join('/');
        url += '?type=' + getSelectedType();
        $.get(url).then(function (response) {
            listItemsVue.list = response;
        }.bind(this));
    }

    /**
     *
     */
    function getSupportedAddOns() {
        let url = [API_HOST, 'addons', 'types'].join('/');
        $.get(url).then(function (response) {
            console.log(response);
            _.each(response, function (entry) {
                $selectType.append($('<option></option>').html(entry.name).attr('val', entry.value));
            });
            getList();
        }.bind(this));
        // call get list

    }
    getSupportedAddOns();
});