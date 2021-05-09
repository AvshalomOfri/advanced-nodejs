const server = require("net").createServer();

server.on("connection", (socket) => {
  console.log("Client connected");
  socket.write("Welcome new client!\n");

  socket.on("data", (data) => {
    console.log("data is:", data);
    socket.write("data is: ");
    socket.write(data);
  });
  socket.setEncoding("utf-8"); //you can set the socket globally to always encode user input with a specified encoder
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(8000, () => {
  console.log("Server bound");
});
