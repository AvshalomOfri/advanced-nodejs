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

// withLog.execute(() => console.log(factorialize(5)));

//if taskFunc() was async it will resolve after the "end" event has been emitted and "after executing" was logged..
withLog.execute(() =>
  setTimeout(() => {
    console.log(factorialize(5));
  }, 2000)
);

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
