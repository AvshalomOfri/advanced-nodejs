const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // fs.readFile("7.1/big.file", (err, data) => {
  //   if (err) throw err;

  //   res.end(data);
  // });

  const src = fs.createReadStream("7.1/big.file");
  src.pipe(res);
});

server.listen(8000);
