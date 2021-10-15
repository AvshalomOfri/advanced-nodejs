const http = require("http");
const pid = process.pid;

//the cluster module will duplicate this server across all available threads

http
  .createServer((req, res) => {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
      sum++;
    } // simulate CPU work
    res.write(`sum is: ${sum} \n`);
    res.end(`Handled by process ${pid}`);
  })
  .listen(8000, () => {
    console.log(`Started process ${pid}`);
  });
