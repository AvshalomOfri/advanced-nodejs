const fs = require("fs");
const EventEmitter = require("events");

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("timer");
    this.emit("begin");
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit("error", err);
      }

      this.emit("data", data);
      console.timeEnd("timer");
      this.emit("end");
    });
  }
}

const withTime = new WithTime();

withTime.on("begin", () => console.log("About to execute"));
withTime.on("end", () => console.log("Done with execute"));
withTime.on("error", () => console.log("error during async operation"));
withTime.on("data", (data) => console.log("data is ready"));

// withTime.execute(fs.readFile, 1);
withTime.execute(fs.readFile, __filename);
