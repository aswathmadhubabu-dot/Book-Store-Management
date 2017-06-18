var express = require('express');

var sql = require('mssql');

var mongodb = require('mongodb').MongoClient;

var objectId = require('mongodb').ObjectID;

var bookRouter = express.Router();

var books = [{
    "author": "Haruki Murakami",
    "genre": "Fiction",
    "date": "2006-01-03",
    "isbn": "1400079276",
    "price": 13.45,
    "title": "Kafka on the Shore",
    "read": false
}, {
    "author": "Charles Bukowski",
    "genre": "Fiction",
    "date": "2004-07-08",
    "isbn": "1852272007",
    "price": 22.48,
    "title": "Pulp",
    "read": false
}, {
    "author": "Haruki Murakami",
    "genre": "Fiction",
    "date": "2002-04-09",
    "isbn": "037571894X",
    "price": 9.01,
    "title": "A Wild Sheep Chase: A Novel",
    "read": false
}, {
    "author": "George Crile",
    "genre": "History",
    "date": "2007-11-06",
    "isbn": "0802143415",
    "price": 10.5,
    "title": "Charlie Wilson's War",
    "read": true
}];


bookRouter.route('/').get(function(req, res) {
    var url = 'mongodb://localhost:27017/libraryApp';

    mongodb.connect(url, function(err, db) {
        var collection = db.collection('books');
        collection.find({}).toArray(function(err, results) {
            res.render('book', {
                title: 'Book',
                nav: [{
                    Link: '/authors',
                    Text: 'Authors'
                }],
                Books: results
            });

        });
    });



});

bookRouter.route('/:id').get(function(req, res) {
    var id = new objectId(req.params.id);
    var url = 'mongodb://localhost:27017/libraryApp';

    mongodb.connect(url, function(err, db) {
        var collection = db.collection('books');
        collection.findOne({
                _id: id
            },
            function(err, results) {
                console.log(results);
                res.render('bookView', {
                    title: 'Book',
                    nav: [{
                        Link: '/authors',
                        Text: 'Authors'
                    }],
                    Book: results
                });


            }

        );

    });
});


module.exports = bookRouter;