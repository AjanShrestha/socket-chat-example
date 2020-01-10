var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function rootHandler(req, res) {
  res.send('<h1>Hello World!</h1>');
});

http.listen(3000, function handler() {
  console.log('listening on *:3000');
});
