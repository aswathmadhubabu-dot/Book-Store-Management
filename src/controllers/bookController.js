var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var bookController = function(bookService) {
	var middleware = function(req, res, next) {
		// if (!req.user) {
		// 	res.redirect('/');
		// }
		next();
	}
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
	};
	var getById = function(req, res) {
		var id = new objectId(req.params.id);
		var url = 'mongodb://localhost:27017/libraryApp';
		mongodb.connect(url, function(err, db) {
			var collection = db.collection('books');
			collection.findOne({
					_id: id
				},
				function(err, results) {
					if (results.bookId) {
						bookService.getBookById(results.bookId, function(err, book) {
							results.book = book;
							res.render('bookView', {
								title: 'Book',
								nav: [{
									Link: '/authors',
									Text: 'Authors'
								}],
								Book: results
							});
						})
					} else {
						res.render('bookView', {
							title: 'Book',
							nav: [{
								Link: '/authors',
								Text: 'Authors'
							}],
							Book: results
						});
					}

					console.log(results);

				}
			);
		});
	};
	return {
		getIndex: getIndex,
		getById: getById,
		middleware: middleware
	};
};
module.exports = bookController;