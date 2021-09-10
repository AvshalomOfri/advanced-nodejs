const fs = require("fs");
//https is the http protocol over tls/ssl.
const server = require("https")
  //when using https, we pass the createServer method on object with a key and cerificate (*openSSL toolkit needs to be installed to generate keys and certs*)
  .createServer({
    key: fs.readFileSync(`${__dirname}/key.pem`),
    cert: fs.readFileSync(`${__dirname}/cert.pem`),
  });

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world\n");
});

server.listen(443); //43 is the default https port
