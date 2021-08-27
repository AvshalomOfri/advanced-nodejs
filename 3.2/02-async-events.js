const fs = require("fs");
const EventEmitter = require("events");

//WithTime will execute an async function and log the execution time to console.
class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("timer");
    this.emit("begin");
    //in addition to ...args, the asyncFunc receives an error-first callback function. If an error occures, an 'error' event is fired and the error listener will be triggered (line 26).And instead of handling data with callbacks, we can listen for and emit a 'data' event, to be handled with a 'data' event listener. the 'end' event is also emitted from within the async function, to avoid logging 'end' before 'data'.
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
