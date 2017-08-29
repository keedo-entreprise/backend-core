var sass = require('node-sass');
console.log('Sass init ');
let fs = require('fs');
let outputFile = [process.cwd(), 'public', 'css', 'style.css'].join('/');
sass.render({
    file: [process.cwd(), 'public', 'sass', 'style.scss'].join('/'),
    outFile: outputFile,
    outputStyle: 'compressed'
}, function (error, result) { // node-style callback from v3.0.0 onwards
    if (error) {
        console.log(error.status); // used to be "code" in v2x and below
        console.log(error)
    }
    else {
        console.log(`writing to ....${outputFile}`);
        fs.writeFile(outputFile, result.css, function (err) {
            if (!err) {
                //file written on disk
                return;
            }
            console.log(err);
        });
    }
});

let bootstrapFile = [process.cwd(), 'public', 'css', 'bootstrap.css'].join('/');
sass.render({
    file: [process.cwd(), 'public', 'sass', 'bootstrap.scss'].join('/'),
    outFile: bootstrapFile,
    outputStyle: 'compressed'
}, function (error, result) { // node-style callback from v3.0.0 onwards
    if (error) {
        console.log(error.status); // used to be "code" in v2x and below

    }
    else {
        console.log(`writing to ....${bootstrapFile}`);
        fs.writeFile(bootstrapFile, result.css, function (err) {
            if (!err) {
                //file written on disk
                return;
            }
            console.log(err);
        });
    }
});


let vendorFile = [process.cwd(), 'public', 'css', 'vendor.css'].join('/');
sass.render({
    file: [process.cwd(), 'public', 'sass', 'vendor.scss'].join('/'),
    outFile: vendorFile,
    outputStyle: 'compressed'
}, function (error, result) { // node-style callback from v3.0.0 onwards
    if (error) {
        console.log(error.status); // used to be "code" in v2x and below

    }
    else {
        console.log(`writing to ....${vendorFile}`);
        fs.writeFile(vendorFile, result.css, function (err) {
            if (!err) {
                //file written on disk
                return;
            }
            console.log(err);
        });
    }
});