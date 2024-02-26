const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public/i"));

io.on("connection", (socket) => {
 console.log("A user is connected!");
 socket.on("disconnect", () => {
  console.log("The user is disconnected!");
 });
 socket.on("chat message", (msg) => {
  io.emit("chat message", msg);
 });
});

server.listen(3000, () => {
 console.log("listening on *:3000");
});
