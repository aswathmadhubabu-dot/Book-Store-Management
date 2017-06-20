var passport = require('passport');
module.exports = function(app) {
	app.use(passport.initialize());
	app.use(passport.session());
	passport.serializeUser(function(user, done) {
		console.log('Serialize user called.');
  		done(null, user);
		//done(null, user);
	});
	passport.deserializeUser(function(user, done) {
		console.log('Deserialize user called.');
		done(null, user);
	});
	require('./strategies/local.strategy')();
};