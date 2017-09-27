var express = require('express');
var app     = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});


app.listen(port, function(){
  console.log("server is running on port " + port);
})
