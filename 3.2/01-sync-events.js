const EventEmitter = require("events");

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

//if taskFunc() is async it will resolve after the "end" and "after executing" are logged, which is chronologically wrong.
withLog.execute(() =>
  setTimeout(() => {
    console.log(factorialize(5));
  }, 2000)
);

// withLog.execute(() => console.log(factorialize(5)));

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
