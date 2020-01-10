var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function rootHandler(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', function onConneciton(socket) {
  console.log('a user connected');

  socket.on('chat message', function onMessage(msg) {
    console.log(`message: ${msg}`);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function onDisconnect() {
    console.log('user disconnected');
  });
});

http.listen(3000, function handler() {
  console.log('listening on *:3000');
});
