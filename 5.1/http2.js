const server = require("http").createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello wul\n");
  // setTimeout(() => {
  //   res.write("test\n");
  //   res.end();
  // }, 5000);
  // // console.log(req.readable);
});
server.timeout = 1000;

server.listen(8000);
