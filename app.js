var express = require('express');

var app = express();

var port = process.env.PORT || 4000;

var bookRouter = require('./src/routes/bookRoutes');

app.use(express.static(__dirname + '/public'));

app.set('views','./src/views');

app.set('view engine','ejs');

app.use('/books',bookRouter);

app.get('/',function(request,response)
{
    response.render('index',{title : 'Books and Authors',
        nav : [{Link:'/books',Text :'Books'},{Link:'/authors',Text:'Authors'}]
    });
});



app.listen(port,function (err) {
    console.log('server running at PORT : ' + port);

});
