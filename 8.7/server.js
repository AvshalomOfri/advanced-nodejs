const http = require("http");
const pid = process.pid;

let usersCount;

http
  .createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users: ${usersCount}`);
  })
  .listen(8000, () => {
    console.log(`Started process ${pid}`);
  });

//update users count when recieving a message from the master (parent) process
process.on("message", (msg) => {
  usersCount = msg.usersCount;
});
