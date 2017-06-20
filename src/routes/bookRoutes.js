var express = require('express');
var sql = require('mssql');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var bookRouter = express.Router();
bookRouter.use(function(req, res, next) {
    if (!req.user) {
        res.redirect('/');
    }
    next();
});
bookRouter.route('/').get();
bookRouter.route('/:id').get();
module.exports = bookRouter;