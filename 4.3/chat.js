const server = require("net").createServer();
let counter = 0;
let sockets = {};

function timestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

server.on("connection", (socket) => {
  socket.id = counter++;
  console.log("Client connected");
  socket.write("Please type your name: ");

  socket.on("data", (data) => {
    //assign id and welcome new user
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}!\n`);
      sockets[socket.id] = socket;
      return;
    }

    //distribute new message to all users
    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key) {
        cs.write(`You: ${data}`);
        return;
      } //prevent client from echoing his own message to himself
      cs.write(`${socket.name}:`);
      // cs.write(`${socket.name} ${timestamp()}: `);
      cs.write(data);
    });
  });

  socket.setEncoding("utf-8"); //utf-8 is set as the global encoding for all sockets

  socket.on("end", () => {
    delete sockets[socket.id];
    console.log("Client disconnected");
  });
});

server.listen(8000, () => console.log("Server bound"));
