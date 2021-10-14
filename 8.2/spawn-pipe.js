//run with git bash terminal
const { spawn } = require("child_process");

const child = spawn("wc");

process.stdin.pipe(child.stdin);

child.stdout.on("data", (data) => {
  process.stdout.write(`child stdout:\n${data}`);
});

child.on("exit", function (code, signal) {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});
