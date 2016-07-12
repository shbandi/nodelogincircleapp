var express = require('express');

var app = express();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
  res.render('index.html');
});

app.use(function(req, res, next){
  console.log('Error:' + req.url);
  res.type('text/plain');
  res.end('Hi Error occured');
  next();
})

app.listen(app.get('port'), function(){
  console.log('Express strated on http://localhost:' + app.get('port') + 'Press Ctrl-C to terminate');
});
