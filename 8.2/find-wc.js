//run with git bash terminal
const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc");

wc.stdout.on("data", (data) => {
  console.log(`Number of files ${data}`);
});

find.stdout.pipe(wc.stdin);
//*Reminder: source.pipe(destination)
