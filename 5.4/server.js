const fs = require('fs');
const path = require('path');
const server = require('http').createServer();
const dirname = path.join(__dirname, '');
const data = { name: 'test', age: '300' };

server.on('request', (req, res) => {
  switch (req.url) {
    case '/api':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
      break;
    case '/about':
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(`${dirname}${req.url}.html`));
      // res.end(fs.readFileSync(`${__dirname}/${req.url}.html`));
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home' });
      res.end('301');
      break;
    default:
      res.writeHead(404);
      res.end('404');
  }
});

server.on('error', (e) => console.log(e.message));
server.listen(8000);
