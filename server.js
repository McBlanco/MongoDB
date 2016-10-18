var http = require('http');
var fs = require('fs');
var events = require('events');

var hostname = '127.0.0.1';
var port = 4000;

var emitter = new events.EventEmitter();

var server = http.createServer(function(req, res) {
	
	fs.readFile('./default.html', 'utf8', function(error, data) {
		if (error)
			return console.log(error);
		
		emitter.emit('fileReaded', data);
		
		res.setHeader('Content-Type', 'text/html');
		res.statusCode = 200;
		res.end(data);
	});
	
});

server.listen(port, hostname, function() {
  console.log('El servidor se est� ejecutando en http://' + hostname + ':' + port);
});

emitter.on('fileReaded', function(data) {
	console.log('Se ley� el fichero "default.html"');
	
});