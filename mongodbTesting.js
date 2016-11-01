var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/facturas";

//Primero que nada: levantar el servidor de MongoDB
// 1 - Abrir la consola CMD con permisos de adminsitrador
// 2 - Ubicarse en la carpeta de instalación de Mongo, C:\Program Files\MongoDB\Server\3.2\bin
// 3 - Ejecutar el comando --> mongod

MongoClient.connect(url, function (err, db) {
	if (err) {		
		console.log(err);
	} else {
		console.log(db);
	}
});