var fs = require('fs');

fs.stat('input.txt', (err, stats) => {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('是否为文件？ ' + stats.isFile());
    console.log('是否为目录？ ' + stats.isDirectory());

});