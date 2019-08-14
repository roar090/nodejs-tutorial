var fs = require("fs");
dir = './tmp/test';
console.log("创建目录 " + dir);

var subDirs = ['apple', 'win', 'linux'];
for (let index = 0; index < subDirs.length; index++) {
    var subDir = subDirs[index];
    fs.mkdir(dir + '/' + subDir, { recursive: true }, (err) => {
        if (err) throw err;
    });
}

fs.readdir("./tmp/test/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
 });