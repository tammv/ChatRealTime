const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
