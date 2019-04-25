let path = require('path');
module.exports = {
    /**
     *
     */
    renderView: (paths, res, locales) => {
        locales = locales || {};
        if (!locales.error) {
            locales.error = null;
        }
        res.render(path.join.apply(null, paths), locales);
    }
};
