/**
 * Created by Administrator on 2016/9/17.
 */
var http=require('http');

http.createServer(function (request, response) {
    //发送HTTP头部
    //HTTP状态值：200 ： OK
    //内容类型
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送响应数据“Hello World”
    response.end('Hello World\n');
}).listen(8888);
//终端打印如下信息
console.log('Server running at http://127.0.0.1:8888');
