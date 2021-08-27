const server = require("http").createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello wul\n");
  res.end();
});

server.listen(8000);
