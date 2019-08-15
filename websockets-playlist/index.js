var express = require("express");
var socket = require("socket.io");
var port = 4000;
//app setup
var app = express();
var server = app.listen(port, function() {
  console.log("Listening to", port);
});

//static files
app.use(express.static("public"));

//socket setup
var io = socket(server);

io.on("connection", function(socket) {
  console.log("made socket connection", socket.id);

  //listen to message from frontend
  socket.on("chat", function(data) {
    //all sockets connection data sent
    io.sockets.emit("chat", data);
  });
  //listen to emitted feedback from frontend and broadcast message
  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });

  socket.on("idle", function(data) {
    socket.broadcast.emit("idle", data);
  });
});
