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
var bookController = require('../controllers/bookController')(null);
bookRouter.route('/').get(bookController.getIndex);
bookRouter.route('/:id').get(bookController.getById);
module.exports = bookRouter;