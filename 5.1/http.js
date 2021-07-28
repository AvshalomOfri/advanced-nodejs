const server = require("http").createServer();
//http is a first class citizen in nodejs . node started as a web server and evolved into the more generalized framework it is today

//a 'request' event happens everytime the client connects to the server
server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello world\n");

  setTimeout(function () {
    res.write("Another Hello world\n");
  }, 10000);

  setTimeout(function () {
    res.write("Yet Another Hello world\n");
  }, 20000);

  // res.end();
});

server.timeout = 3000; //changes the server default timeout of 30 seconds

server.listen(8000);
