const http = require("http");
const { fork } = require("child_process");

const server = http.createServer();
//you can offload a heavy computation request to a forked process, leaving the server free to respond to other calls
server.on("request", (req, res) => {
  if (req.url === "/compute") {
    // const sum = longComputation();
    // return res.end(`Sum is ${sum}`);
    const compute = fork(`${__dirname + "/compute.js"}`);
    compute.send("start");
    compute.on("message", (sum) => {
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end("Ok");
  }
});

server.listen(3000);
console.log("listening on 3000");
