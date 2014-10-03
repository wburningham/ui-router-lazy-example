var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});

app.get('*', function(req, res){
  console.log('res.path',req.path)
	res.sendFile(__dirname + '/app' + req.path);
});


app.listen(8000);