var express = require('express');

var app = express();

var PORT = 4000;

var bookRouter = express.Router();

app.use(express.static('public'));

app.set('views','./src/views');

app.set('view engine','ejs');

bookRouter.route('/').get(function(request,response) {
    response.render('book',{title : 'Books',
        nav : [{Link:'/authors',Text:'Authors'}]
    });
});

bookRouter.route('/single').get(function(request,response) {
    response.send('Hello ! Books');
});
app.get('/',function(request,response)
{
    response.render('index',{title : 'Books and Authors',
        nav : [{Link:'/books',Text :'Books'},{Link:'/authors',Text:'Authors'}]
    });
});

app.use('/books',bookRouter);

app.listen(PORT,function (err) {
    console.log('server running at PORT : ' + PORT);

});
