var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/facturas";

MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log(err);
	} else {
		console.log(db);
	}
});