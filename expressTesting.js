var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//La función middleway sirve para verificar por ejemplo si el usuario está logueado,
//o si tiene los permisos. También sirve para parsear archivos
app.use(function (req, res, next) {
	res.mensajito = "Hola";
	next();
});

//app.use(bodyParser.json());

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.get("/prueba", function (req, res) {
	res.send("Probando");
	
	console.log("Query:");
	console.log(req.query);
	
	console.log(res.mensajito);
});

app.post("/postest", function (req, res) {
	console.log(req.body);
	res.send(res);
});

app.listen(3010, function() {
	console.log("Listen on http://localhost:3010");
});