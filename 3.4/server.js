const EventEmitter = require("events");

//the server is extended instead of directly instantiated because it needs some custom logic
class Server extends EventEmitter {
  constructor(client) {
    super();
    this.tasks = {}; //contains all tasks
    this.taskId = 1; // unique id for each task
    process.nextTick(() => {
      //this initial response emitter is wrapped in nextTick because when the server is required in the client module it is fired immediatly before the inital response emitter is defined.
      this.emit(
        "response",
        'Awaiting command... (type "help" to list all commands)'
      );
    });
    client.on("command", (command, args) => {
      switch (command) {
        case "help":
        case "add":
        case "ls":
        case "delete":
        case "update":
          this[command](args);
          break;
        case "exit":
          process.exit(console.log("process terminated"));
        default:
          this.emit("response", "Unknown command...");
      }
    });
  }

  //helper function for the ls command
  tasksString() {
    return Object.keys(this.tasks)
      .map((key) => {
        return `${key}: ${this.tasks[key]}`;
      })
      .join("\n");
  }

  //all commands functions:
  help() {
    this.emit(
      "response",
      `Available Commands:
  add <task>
  ls
  delete :id
  update: id value`
    );
  }
  add(args) {
    this.tasks[this.taskId] = args.join(" ");
    this.emit("response", `Added task ${this.taskId}`);
    this.taskId++;
  }
  ls() {
    this.emit("response", `Tasks:\n${this.tasksString()}`);
  }
  delete(args) {
    delete this.tasks[args[0]];
    this.emit("response", `Deleted task ${args[0]}`);
  }
  update(args) {
    let updated = args[1];
    this.tasks[args[0]] = updated; //args[0] is the task id
    this.emit("response", `Updated ${args[0]}`);
  }
}

module.exports = (client) => new Server(client);
