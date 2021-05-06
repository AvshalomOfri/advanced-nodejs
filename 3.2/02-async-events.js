const fs = require("fs");
const EventEmitter = require("events");
// const { StringDecoder } = require("string_decoder").StringDecoder;
// const decoder = new StringDecoder("utf8");
//The EventEmitter is a module that facilitate communication between objects in node

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("execute");
    this.emit("begin");
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit("error", err);
      }

      this.emit("data", data);
      console.timeEnd("execute");
      this.emit("end");
    });
  }
}

const withTime = new WithTime();

withTime.on("begin", () => console.log("About to execute"));
withTime.on("end", () => console.log("Done with execute"));
withTime.on("error", () => console.log("error during async operation"));
// withTime.on("data", (data) => console.log(data.toString()));

// withTime.execute(fs.readFile, 1);
withTime.execute(fs.readFile, __filename);
