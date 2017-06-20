var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient();

module.exports = function() {
	passport.use(new LocalStrategy({
		'usernameField': 'username',
		'passwordField': 'password'
	}, function(username, password, done) {
		var url = 'mongodb://localhost:27017/libraryApp';

	mongodb.connect(url, function(err, db) {
		var collection = db.collection('users');
		});
		var user = {
			username: username,	
			password: password
		};
		done(null, user);
	}));

};