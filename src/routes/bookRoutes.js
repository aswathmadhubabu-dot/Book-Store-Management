var express = require('express');
var sql = require('mssql');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var bookRouter = express.Router();
var bookController = require('../controllers/bookController')(null);
bookRouter.use(function(req, res, next) {
    if (!req.user) {
        res.redirect('/');
    }
    next();
});
bookRouter.route('/').get(bookController.getIndex(null));
bookRouter.route('/:id').get(bookController.getById(null));
module.exports = bookRouter;