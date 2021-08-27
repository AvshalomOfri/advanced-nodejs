const server = require("http").createServer();
//http is a first class citizen in nodejs . node started as a web server and evolved into the more generalized framework it is today

//a 'request' event happens everytime the client connects to the server
//node can handle partial chunked responses, since the response object is a writeble stream!
server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello world\n");
  res.end();

  setTimeout(function () {
    res.write("Another Hello world\n");
    res.end();
  }, 1000);

  setTimeout(function () {
    res.write("Yet Another Hello world\n");
    res.end();
  }, 2000);

  // res.end();
});

server.timeout = 3000; //changes the server default timeout of 30 seconds

server.listen(8000);
