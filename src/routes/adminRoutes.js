var express = require('express');

var adminRouter = express.Router();

var mongodb = require('mongodb').MongoClient();


var books = [
    {
        "author": "Haruki ad Murakami",
        "genre": "Fiction",
        "date": "2006-01-03",
        "isbn": "1400079276",
        "price": 13.45,
        "title": "Kafka on the Shore",
        "read": false
    },
    {
        "author": "Charles  sf Bukowski",
        "genre": "Fiction",
        "date": "2004-07-08",
        "isbn": "1852272007",
        "price": 22.48,
         "title": "Pulp",
         "read": false
    },
    {
        "author": "Haruki Muraka dmi",
        "genre": "Fiction",
        "date": "2002-04-09",
        "isbn": "037571894X",
        "price": 9.01,
        "title": "A Wild Sheep Chase: A Novel",
        "read": false
    },
    {
        "author": "George  k  Crile",
        "genre": "History",
        "date": "2007-11-06",
        "isbn": "0802143415",
        "price": 10.5,
        "title": "Charlie Wilson's War",
        "read": true
    }
];

adminRouter.route('/addBooks').get(function(req,res) {
	
	var url = 'mongodb://localhost:27017/libraryApp';

	mongodb.connect(url,function(err,db){
		var collection = db. collection('books');
		collection.insertMany(books,function(err,results){
			console.log(results);
			res.send(results);
			db.close();
		});

	});

	});


	

module.exports = adminRouter;