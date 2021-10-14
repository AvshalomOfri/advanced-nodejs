const { spawn } = require("child_process");

const child = spawn("node", ["/timer.js"], {
  detached: false, // detach process child from parent (*os dependent)
  stdio: "ignore", //ignore the parnet stdio file descriptors, so the parent can terminate while the child keep on running
});

child.unref(); //allows the parent process to terminate independently from the child

//*while detaching on windows the child will have its own console while on linux the detached child will become to new leader of a new process group
