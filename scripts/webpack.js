var fs = require('fs');
writeHash = function (hash){
    fs.writeFile(__dirname + '/../public/resources.hash', hash, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
};
function PluginHash(options) {
    // Configure your plugin with options...
}
PluginHash.prototype.apply = function(compiler) {
    compiler.plugin("emit", function(compilation, callback) {
        writeHash(compilation.hash);
        callback();
    });
};

module.exports = PluginHash;