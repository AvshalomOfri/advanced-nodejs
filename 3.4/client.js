const EventEmitter = require("events");
const readline = require("readline");

//simple input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//This client will have simple logic. Instantiating (instead of extending a custom class) an EventEmitter object should be enough.
const client = new EventEmitter();
const server = require("./server")(client);

server.on("response", (resp) => {
  //cls
  process.stdout.write("\u001B[2J\u001B[0;0f");
  //log resp to console
  process.stdout.write(resp);
  //prompt for next command
  process.stdout.write("\n> ");
});

let command, args;
//user input is assigned to the "command" and "...args" variables, respectively.
rl.on("line", (input) => {
  [command, ...args] = input.split(" ");
  client.emit("command", command, args);
});
