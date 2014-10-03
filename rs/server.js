var express = require('express');
var app = express();


app.get('/static/*', function(req, res){
  console.log('res.path',req.path)
  	var path = req.path.replace('/static', '');
	res.sendFile(__dirname + '/app' + path);
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(8000);