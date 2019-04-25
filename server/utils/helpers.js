let env = require([process.cwd(), 'env.js'].join('/'));
/**
 *
 * @type {{getBasePath: (())}}
 */
let helpers = {
    /**
     *
     * @returns {*}
     */
    getBasePath: () => {
        return process.cwd();
    },
    /**
     *
     */
    isProd: function () {
        return process.env.NODE_ENV === "production";
    },
    /**
     *
     * @returns {string}
     */
    getDBUri: () => {
        return env.db_uri;

    },

    /**
     *
     * @returns {string}
     */
    getPaypalCrendentials: () => {
        return {
            SANDBOX_CLIENT: env.paypal_sandbox_client,
            PRODUCTION_CLIENT: env.paypal_production_client,
        }

    },
    /**
     *
     * @returns {string}
     */
    getUploadURl: () => {
        return env.upload_dir;
    },

    /**
     *
     * @returns {string}
     */
    getAddOnsUploadDirsURl: () => {
        return env.addons_upload_dir;
    },
    /**
     *
     * @param file
     */
    getFileExtension: (file) => {
        let parts = file.split('.');
        return parts[parts.length - 1];
    },
    /**
     *
     * @param user
     * @param req
     */
    initUserSession: (user, req) => {
        req.session.userId = user.id;
        req.session.isLoggedIn = true;
        if (user.isAdmin) {
            req.session.isUserAdmin = true;
        }
    },
    /**
     *
     * @param req
     */
    cleanUserSession: (req) => {
        delete req.session.userId;
        delete req.session.isUserAdmin;
        delete req.session.isLoggedIn;
    }
};
module.exports = helpers;