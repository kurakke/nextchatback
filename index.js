const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: ["https://nextchat-psi.vercel.app"],
});
const PORT = 5000 || process.env.PORT;

io.on("connection", (socket) => {
  console.log("yahharo connected");
  socket.on("sendYahharo", (data) => {
    console.log(data);
    io.emit("receiveYahharo", data);
  });
  socket.on("disconnect", () => {
    console.log("yahharo disconnected");
  });
});
server.listen(PORT, () => console.log("yahharo-" + PORT));
