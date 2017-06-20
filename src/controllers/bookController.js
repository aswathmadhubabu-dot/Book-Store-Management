var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var bookController = function(bookService) {
	var getIndex = function(req, res) {
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
	}
	var getById = function(req, res) {
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
	}
	return {
		getIndex: getIndex,
		getById: getById
	}
}
module.exports = bookController;