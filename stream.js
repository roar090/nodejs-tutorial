var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log('读取完成');
});

readerStream.on('error', function (err) {
    console.error(err);
});

setTimeout(function(){
    console.log('等待读取完成')
},1000);

var writeStream=fs.createWriteStream('output.txt');
writeStream.setDefaultEncoding('utf8');
writeStream.write(data);
writeStream.end();

writeStream.on('finish',function(){
    console.log('写入完成');
});

console.log('程序执行完成');


