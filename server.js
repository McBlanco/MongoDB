var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 4000;

var server = http.createServer(function(req, res) {
	
	fs.readFile('./default.html', 'utf8', function(error, data) {
		if (error) {
			return console.log(error);
		};
		console.log('Se leyó el fichero "default.html"');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(data);
	});
});

server.listen(port, hostname, function() {
  console.log('El servidor se está ejecutando en http://' + hostname + ':' + port);
});