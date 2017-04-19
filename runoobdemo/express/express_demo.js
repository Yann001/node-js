var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.send('Hello World.');	
});
var server = app.listen(8888, function() {
	// debugger;
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为 http://' + host + ':' + port);
});

