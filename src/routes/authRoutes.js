var express = require('express');

var authRouter = express.Router();

var mongodb = require('mongodb').MongoClient();

authRouter.route('/signUp').post(function(req, res) {
	console.log(req.body);
	req.login(req.body, function() {
		res.redirect('/auth/profile');
	});
});


authRouter.route('/profile').get(function(req, res) {
	console.log(req.body);
	res.json(req.user);
});	
module.exports = authRouter;