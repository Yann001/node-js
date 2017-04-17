## Node.js Buffer(缓冲区)
### 创建Buffer类
```js
// 创建长度为10字节的Buffer实例
var buf = new Buffer(10);
// 通过给定数组创建Buffer实例
var buf = new Buffer([10, 20, 30, 40, 50]);
// 通过一个字符串来创建Buffer实例
var buf = new Buffer("www.runoob.com", "utf-8");
```
### 写入缓冲区
语法：
```js
buf.write(string[, offset[, length]][, encoding]);
```
参数：
- string：写入缓冲区的字符串
- offset：缓冲区开始写入的索引值，默认为0
- length：写入的字节数，默认为buf.length
- encoding：使用的编码，默认为utf-8

返回值：返回实际写入的大小。
### 从缓冲区读取数据
语法：
```js
buf.toString([encoding[, start[, end]]]);
```
参数：
- encoding：使用的编码，默认为utf-8
- start：制定开始读取索引的位置，默认为0
- end：结束位置，默认为缓冲区的末尾

返回值：解码缓冲区数据并使用指定的编码返回字符串。
### 将 Buffer 转换为 JSON 对象
语法：
```js
buf.toJSON()
```
返回值：返回 JSON 对象。
### 缓冲区合并
语法：
```js
Buffer.concat(list[, totalLength])
```
参数
- list - 用于合并的 Buffer 对象数组列表。
- totalLength - 指定合并后Buffer对象的总长度。

返回值：返回一个多个成员合并的新 Buffer 对象。
### 缓冲区比较
语法
```js
buf.compare(otherBuffer);
```
参数
- otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

返回值：返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
### 拷贝缓冲区
语法
```js
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```
参数：
- targetBuffer - 要拷贝的 Buffer 对象。
- targetStart - 数字, 可选, 默认: 0
- sourceStart - 数字, 可选, 默认: 0
- sourceEnd - 数字, 可选, 默认: buffer.length

返回值：没有返回值。
### 缓冲区裁剪
```js
buf.slice([start[, end]])
```
参数：
- start - 数字, 可选, 默认: 0
- end - 数字, 可选, 默认: buffer.length

返回值：返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
