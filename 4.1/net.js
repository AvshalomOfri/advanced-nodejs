//*i'm using Putty terminal as client since cmd and powershell send data with each keystroke instead of after Enter
const server = require("net").createServer();

server.on("connection", (socket) => {
  console.log("Client connected");
  socket.write("Welcome new client!\n");

  //echos the user input to the console
  socket.on("data", (data) => {
    // console.log("data is:", data);
    // socket.write("data is: ");
    socket.write(data);
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(8000, () => console.log("Server bound"));
