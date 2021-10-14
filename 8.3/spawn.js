const { spawn } = require("child_process");

// Shell mode
// const child = spawn("find . -type f", {
//   stdio: "inherit",//inherit stdout,stdin and stderr from the parent process
//   shell: true,
//when the shell property is set to true, it enables spawn() to take in standard shell syntax as arguments (instead of `"command" [options]`), but still stream the data (instead of buffering it like exec() does)
// });

// Different cwd
// const child = spawn("find . -type f | wc -l", {
//   stdio: "inherit",
//   shell: true,
//   cwd: "./",
// });

// Custom env
// const child = spawn("echo $ANSWER", {
//   stdio: "inherit",
//   shell: true,
//   //you can block a child process from accessing the parent environment variables
//   env: { ANSWER: 42 },
// });
