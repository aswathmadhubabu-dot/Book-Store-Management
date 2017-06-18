var express = require('express');

var authRouter = express.Router();

var mongodb = require('mongodb').MongoClient();

authRouter.route('/signUp').post(function (req,res) {
	console.log(req.body);
});

module.exports = authRouter;