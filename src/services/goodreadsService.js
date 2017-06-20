var goodreadsService = function() {

	var getBookById = function(id, cb) {
		cb(null, {
			description: 'Our Desc'
		});
	};
	return {
		getBookById: getBookById
	};
};

module.exports = goodreadsService;