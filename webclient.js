var http = require('http');

//用于请求的选项
var options = {
    host: 'localhost',
    port: '8888',
    path: '/index.html'
};

//处理响应的回调函数
var callback = (response) => {
    var body = '';
    response.on('data', (data) => {
        body += data;
    });
    response.on('end',()=>{
        console.log(body);
    });
};
//向服务器发送请求
var req=http.request(options,callback);
req.end();