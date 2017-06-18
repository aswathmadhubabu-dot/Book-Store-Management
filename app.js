var express = require('express');

var app = express();

var sql = require('mssql');

var sqlConfig =  {
    'user': 'sa',
    'password': 'Ases573@gmail.com',
    'server': "ASWATH\\SQLEXPRESS", // You can use 'localhost\\instance' to connect to named instance
    'database': 'Book',
    'dialect': "mssql",
	'port': 1433,
			'dialectOptions': {
			"instanceName": 'SQLEXPRESS'
			},
    
   
   
};

sql.connect(sqlConfig,function(err) {
    console.log(err);
});

var port = process.env.PORT || 4000;

var bookRouter = require('./src/routes/bookRoutes');

var adminRouter = require('./src/routes/adminRoutes');

app.use(express.static(__dirname + '/public'));

app.set('views','./src/views');

app.set('view engine','ejs');

app.use('/books',bookRouter);

app.use('/admin',adminRouter);

app.get('/',function(req,res)
{
    res.render('index',{title : 'Books and Authors',
        nav : [{Link:'/books',Text :'Books'},{Link:'/authors',Text:'Authors'}]
    });
});

app.listen(port,function (err) {
    console.log('server running at PORT : ' + port);

});
