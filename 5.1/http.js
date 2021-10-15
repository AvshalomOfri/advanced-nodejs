const server = require("http").createServer();
//*Curl was installed for convenient testing.
//http is a first class citizen in nodejs . node started as a web server and evolved into the more generalized framework it is today

//a 'request' event happens everytime the client connects to the server
//node can handle partial chunked responses, since the response object is a writeble stream.
server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello world\n");
  // res.end(); placing a res.end() here would have terminated the connection before the delayed res.write() messages could be sent. This is why the res.end() has been nested within the function who's being called the last.

  setTimeout(function () {
    res.write("Another Hello world\n");
  }, 1000);

  setTimeout(function () {
    res.write("Yet Another Hello world\n");
    res.end();
  }, 9000);

  // res.end();
});

server.timeout = 10000; //changes the server default timeout (default is 30 seconds)

server.listen(8000, console.log("listening on 8000..."));
