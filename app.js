var express = require("express");

var app = express();

var PORT = 4000;

app.listen(PORT,function (err) {
	console.log("server running at PORT : "+PORT);
});
