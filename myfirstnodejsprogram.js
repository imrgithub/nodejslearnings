var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});    
	res.end('<b>Welcome to my World!</b>');
}).listen(8080);