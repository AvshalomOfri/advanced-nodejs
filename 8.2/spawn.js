//*run in git bash terminal since linux commands are used here

const { spawn } = require("child_process");
//a child is spawn and given a command with an array of arguments
const child = spawn("find", ["lorem.txt", "-type", "f"]);

child.stdout.on("data", (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on("exit", function (code, signal) {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.stderr
