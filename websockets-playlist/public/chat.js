//make connection
//Make connection on frontend
var socket = io.connect("http://localhost:4000");

//Query DOM
var messageInput = document.getElementById("message");
var handleInput = document.getElementById("handle");
var sendButton = document.getElementById("send");
var mesageOutput = document.getElementById("output");
var feedbackOutput = document.getElementById("feedback");

//Emit events

sendButton.addEventListener("click", function() {
  socket.emit("chat", {
    mesageInput: messageInput.value,
    handleInput: handleInput.value
  });
});
//broadcast emit to server
messageInput.addEventListener("keydown", function() {
  socket.emit("typing", handleInput.value);
});
messageInput.addEventListener("keyup", function() {
  socket.emit("idle", null);
});
//listen for chat message event from server
socket.on("chat", function(data) {
  mesageOutput.innerHTML +=
    "<p><strong>" + data.handleInput + ":</strong>" + data.mesageInput + "</p>";
});

socket.on("typing", function(data) {
  feedbackOutput.innerHTML =
    "<p><em>" + data + " is typing a message...</em></p>";
});

socket.on("idle", function(data) {
  setTimeout(clearFeedback, 2000);
});

function clearFeedback() {
  feedbackOutput.innerHTML = "";
}
