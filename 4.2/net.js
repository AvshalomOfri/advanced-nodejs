//*i'm using Putty terminal as client since cmd and powershell send data with each keystroke instead of after Enter
const server = require("net").createServer();
let counter = 0;
let sockets = {};

server.on("connection", (socket) => {
  socket.id = counter++;
  sockets[socket.id] = socket;

  console.log("Client connected");
  socket.write("Welcome new client!\n");

  //distribute incoming messages to all connected clients
  socket.on("data", (data) => {
    Object.entries(sockets).forEach(([key, cs]) => {
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });

  socket.on("end", () => {
    delete sockets[socket.id]; //prevent server from crashing when a client has left
    console.log("Client disconnected");
  });
});

server.listen(8000, () => console.log("Server bound"));
