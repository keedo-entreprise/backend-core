var path = require('path');
var webpack = require('webpack')
var jsDir = path.join(process.cwd(), 'public', 'js');
var vendorDir = path.join(jsDir, 'vendor');
var _ = require('underscore');
var common = {
    'jquery': require.resolve(path.join(vendorDir, 'jquery.min.js')),
    'jquery-ui': require.resolve(path.join(vendorDir, 'jquery-ui.min.js')),
    'jquery.flexslider': require.resolve(path.join(vendorDir, 'jquery.flexslider-min.js')),
    'jscookie' : require.resolve(path.join(vendorDir, 'jscookie.js')),
    'jquery.waypoints': require.resolve(path.join(vendorDir, 'jquery.waypoints.min.js')),
    'underscore' : require.resolve(path.join(vendorDir, 'underscore.min.js')),
    'perfect-scrollbar': require.resolve(path.join(vendorDir, 'perfect-scrollbar.jquery.min.js')),
    'owl.carousel': require.resolve(path.join(vendorDir, 'owl.carousel.min.js')),
    // 'jquery.easing': path.join(vendorDir, 'jquery.easing.1.3.js'),
    'screenfull': path.join(vendorDir, 'screenfull.min.js')
    // 'bootstrap': path.join(vendorDir, 'bootstrap.min.js'),
};
let viewerVendorAlias = {
    'bookblock': require.resolve(path.join(vendorDir,  'bookblock', 'bookblock.js')),
    'jquery.bookblock': require.resolve(path.join(vendorDir, 'bookblock', 'jquery.bookblock.js')),
    'jquerypp': require.resolve(path.join(vendorDir, 'bookblock', 'jquerypp.custom.js'))
};
let otherAliases = {
    'dropzone' : path.join(vendorDir, 'dropzone.min.js')
}
module.exports = {
    entry: {
        common : path.join(jsDir, 'app', 'common', 'app.js'),
        index : path.join(jsDir, 'app', 'index.js'),
        admin_uploader: path.join(jsDir, 'app',  'admin', 'uploader.js'),
        builder: path.join(jsDir, 'app', 'stories', 'builder', 'index.js'),
        viewer: path.join(jsDir, 'app', 'stories', 'viewer.js'),
        vendor: _.keys(common)

    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(jsDir, 'dist'),
        publicPath: "/_s/l/js/",
    },
    watch : true,
    resolve : {
        alias : _.extend(common, viewerVendorAlias, otherAliases)
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery : "jquery",
            _ : "underscore",
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'window.Hammer' : 'hammer',
            'hammerjs' : 'hammer',
            'screenfull' : 'screenfull'
        }),
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"}),
    ],
    externals: {
       // jquery: 'jQuery'
    }
};