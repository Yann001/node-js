/**
 * Created by Administrator on 2016/9/17.
 */
var fs;
fs = require('fs');
/*阻塞代码实例  在文件读取完后才执行完程序
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log('程序执行结束！');
 */
//不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能
//因此，阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
/*非阻塞
var data;
data = fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
console.log('程序执行结束！');
*/
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");