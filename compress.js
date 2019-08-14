let fs = require("fs");
let zlib = require('zlib');

function compress(filepath) {
    if (!filepath) return;
    // 压缩 input.txt 文件为 input.txt.gz
    fs.createReadStream(filepath)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filepath + '.gz'));

    console.log("文件压缩完成。");
}

function uncompress(filepath) {
    fs.createReadStream(filepath)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('zzzz.txt'));
    console.log('文件解压完成');
}

module.exports = { compress, uncompress };

// compress('input.txt');
// uncompress('input.txt.gz');