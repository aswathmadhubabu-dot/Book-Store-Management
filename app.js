var express = require("express");

var app = express();

var PORT = 4000;

app.use(express.static("public"));

app.use(express.static("src/views"));

app.get("/",function(request,response)
{
response.render("index.html");
});

app.get("/books",function(request,response)
{
response.send("Hello books");
});

app.listen(PORT,function (err) {
	console.log("server running at PORT : "+PORT);
});
