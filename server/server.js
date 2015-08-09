var express = require('express'),
	multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

var app = express();


app.post('/', multipartMiddleware,  function (req, res) {
	console.dir(req.body);
  res.sendStatus(200);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});