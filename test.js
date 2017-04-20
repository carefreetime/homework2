var http = require('http');
var req = require('request');
var hostname = '127.0.0.1';
var port = 7774;

http.createServer(function (request, response) {
	req.post({
		url: 'http://ycchen.im.ncnu.edu.tw/join.php',
		form: {'嗚嗚嗚': '作業寫好久QuQ'}
	}, function(error, res, body){
		response.writeHead(200, {'Content-Type': 'text/html'});
	    response.write(body);
	    response.end();
	});
}).listen(port, hostname);