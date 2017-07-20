var watch = require('watch');
var path = require('path');
var localeFolderName = 'locale' ;
var locale = path.join(process.cwd(), localeFolderName) ;
var jsonConcat = require("json-concat");
var concat = function(dest){
  jsonConcat({
      src: path.join(locale, dest),
      dest: path.join(locale, dest + '.json')
  }, function (json) {
      console.log(json);
  });
}

/**
 *
 */
watch.watchTree(locale, function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      console.log("changed");
    } else if (prev === null) {
      // f is a new file
    } else if (curr.nlink === 0) {
      // f was removed
    } else {
     var target = path.basename(path.dirname(f));
     if (target !== localeFolderName){
       console.log(target);
       concat(target);
     }
    }
  })
