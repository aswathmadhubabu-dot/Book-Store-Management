var express = require('express');

var sql = require('mssql');

var bookRouter = express.Router();

var books = [
    {
        "author": "Haruki Murakami",
        "genre": "Fiction",
        "date": "2006-01-03",
        "isbn": "1400079276",
        "price": 13.45,
        "title": "Kafka on the Shore",
        "read": false
    },
    {
        "author": "Charles Bukowski",
        "genre": "Fiction",
        "date": "2004-07-08",
        "isbn": "1852272007",
        "price": 22.48,
         "title": "Pulp",
         "read": false
    },
    {
        "author": "Haruki Murakami",
        "genre": "Fiction",
        "date": "2002-04-09",
        "isbn": "037571894X",
        "price": 9.01,
        "title": "A Wild Sheep Chase: A Novel",
        "read": false
    },
    {
        "author": "George Crile",
        "genre": "History",
        "date": "2007-11-06",
        "isbn": "0802143415",
        "price": 10.5,
        "title": "Charlie Wilson's War",
        "read": true
    }
];

var result;

bookRouter.route('/').get(function(req,res) {
   
   var request = new sql.Request();

   request.query('select * from books',function(err,recordset){
    console.log(recordset);
    var result = recordset["recordset"];
    res.render('book',{title : 'Book',
        nav : [{Link:'/authors',Text:'Authors'}],
        Books : result
    });
   });

    

});

bookRouter.route('/:id').get(function(req,res) {
     var id = req.params.id;
     var request = new sql.Request();
    request.query('select * from books where id = '+id,function(err,recordset){
    console.log(recordset["recordset"][0]);
    var result2 = recordset["recordset"];
     res.render('bookView',{title : 'Book',
        nav : [{Link:'/authors',Text:'Authors'}],
        Book : result2[0]
    });
 });
    
});

module.exports = bookRouter;