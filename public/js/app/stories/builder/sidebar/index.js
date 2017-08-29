;(function () {
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
