const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// Names of everyone in the chat, keyed by socket id
const onlineUsers = new Map();
const sendUserList = () => io.emit("users", [...onlineUsers.values()]);

io.on("connection", (socket) => {
  // Let a newly opened page see who is already here
  socket.emit("users", [...onlineUsers.values()]);

  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("broadcastMessage", message);
  });

  socket.on("join", (name) => {
    socket.broadcast.emit("join", name);
    onlineUsers.set(socket.id, name);
    sendUserList();
  });
  socket.on("change", (name) => {
    const message =
      "<br>" +
      onlineUsers.get(socket.id) +
      " has changed their name to " +
      name;
    socket.broadcast.emit("broadcastMessage", message);
    onlineUsers.set(socket.id, name);
    sendUserList();
  });
  // Typing indicator: tell everyone else who started/stopped typing
  socket.on("typing", () => {
    // Ignore sockets that haven't joined (e.g. reconnected after a server restart)
    if (!onlineUsers.has(socket.id)) return;
    socket.broadcast.emit("typing", {
      id: socket.id,
      name: onlineUsers.get(socket.id),
    });
  });
  socket.on("stopTyping", () => {
    socket.broadcast.emit("stopTyping", socket.id);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("stopTyping", socket.id);
    onlineUsers.delete(socket.id);
    sendUserList();
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
