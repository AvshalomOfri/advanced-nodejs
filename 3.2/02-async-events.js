const fs = require("fs");
const EventEmitter = require("events");

//WithTime will execute this async function and log in the time it takes with the help of console.time().
class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("timer");
    this.emit("begin");
    // this async function is handled with the standard error-first pattern but here it's 𝘭𝘪𝘴𝘵𝘦𝘯𝘪𝘯𝘨 for an error event than emits an error if one has occured. And instead of handling data with callbacks, we can listen to a data event than emit it to the listeners for handling. the "end" is also emitted from within the async function
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

withTime.execute(fs.readFile, 1);
// withTime.execute(fs.readFile, __filename);
