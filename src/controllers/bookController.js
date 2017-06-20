var bookController = function(bookService){

  var getIndex  = function(req, res) {
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
  var getbyId 
}