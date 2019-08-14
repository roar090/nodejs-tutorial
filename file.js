var fs = require('fs');

//异步读取
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log('异步读取：\n' + data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取：\n'+data)
console.log('程序执行完成');


//获取文件信息
fs.stat('input.txt',(err,stats)=>{
    console.log(stats.toString());
});