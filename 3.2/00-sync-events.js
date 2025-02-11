const EventEmitter = require("events");
//The EventEmitter is a module that facilitate communication between objects in node

//this code run synchronounsly
class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log("Before executing");
    this.emit("begin");
    taskFunc();
    this.emit("end");
    console.log("After executing");
  }
}

const withLog = new WithLog();

withLog.on("begin", () => console.log("About to execute"));
withLog.on("end", () => console.log("Done with execute"));

withLog.execute(() => console.log("***executing task***"));
