let path = require('path');
let webpack = require('webpack');
let jsDir = path.join(process.cwd(), 'public', 'js');
let vendorDir = path.join(jsDir, 'vendor');
let hashPlugin = require('./scripts/webpack');
let _ = require('underscore');
let helpers = require('./server/utils/helpers.js');
let common = {
    'jquery': require.resolve(path.join(vendorDir, 'jquery.min.js')),
    'jquery-ui': require.resolve(path.join(vendorDir, 'jquery-ui.min.js')),
    'jquery.flexslider': require.resolve(path.join(vendorDir, 'jquery.flexslider-min.js')),
    'jscookie': require.resolve(path.join(vendorDir, 'jscookie.js')),
    'jquery.waypoints': require.resolve(path.join(vendorDir, 'jquery.waypoints.min.js')),
    'underscore': require.resolve(path.join(vendorDir, 'underscore.min.js')),
    'perfect-scrollbar': require.resolve(path.join(vendorDir, 'perfect-scrollbar.jquery.min.js')),
    'owl.carousel': require.resolve(path.join(vendorDir, 'owl.carousel.min.js')),
    'screenfull': path.join(vendorDir, 'screenfull.min.js')
    // 'jquery.easing': path.join(vendorDir, 'jquery.easing.1.3.js'),
    // 'bootstrap': path.join(vendorDir, 'bootstrap.min.js'),
};

let viewerVendorAlias = {
    'bookblock': require.resolve(path.join(vendorDir, 'bookblock', 'bookblock.js')),
    'jquery.bookblock': require.resolve(path.join(vendorDir, 'bookblock', 'jquery.bookblock.js')),
    'jquerypp': require.resolve(path.join(vendorDir, 'bookblock', 'jquerypp.custom.js'))
};
//
let otherAliases = {
    'dropzone': path.join(vendorDir, 'dropzone.min.js')
};
let isProductionMode = helpers.isProd();


let filename = "[name]" + (isProductionMode ? ".[hash]" : "") + ".bundle.js" ;

//
let plugins = [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        _: "underscore",
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        'window.Hammer': 'hammer',
        'hammerjs': 'hammer',
        'screenfull': 'screenfull'
    }),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: filename})
];

// 
if (isProductionMode) {
    plugins.push(new hashPlugin());
    plugins.push(
        new UglifyJSPlugin({
            uglifyOptions: {
                beautify: false,
                ecma: 6,
                compress: true,
                comments: false,
                drop_console: true
            }
        })
    );
}

module.exports = {
    entry: {
        common: path.join(jsDir, 'app', 'common', 'app.js'),
        index: path.join(jsDir, 'app', 'index.js'),
        admin_uploader: path.join(jsDir, 'app', 'admin', 'uploader.js'),
        builder: path.join(jsDir, 'app', 'stories', 'builder', 'index.js'),
        viewer: path.join(jsDir, 'app', 'stories', 'viewer', 'index.js'),
        vendor: _.keys(common)

    },
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.join(jsDir, 'dist'),
        publicPath: "/_s/l/js/",
    },
    watch: true,
    resolve: {
        alias: _.extend(common, viewerVendorAlias, otherAliases)
    },
    plugins: plugins,
    externals: {
        // jquery: 'jQuery'
    }
};