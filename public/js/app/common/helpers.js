;(function () {
    window.Helpers = {
        /**
         * http://localhost:5000/stories/<ID>
     *     http://localhost:5000/admin/stories/598792e782456b2e183fa580/
         * @returns {*}
         */
        getWindowId: function () {
            var url = window.location.href;
            var urlParts = url.split('/');
            console.log(urlParts);
            var id = urlParts[urlParts.length - 1];
            if (!id.length) {
                id = urlParts[urlParts.length - 2];
            }
            return id;
        }
    };
}());
