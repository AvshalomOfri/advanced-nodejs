const fs = require("fs");
const EventEmitter = require("events");

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("execute");
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit("error", err);
      }

      this.emit("data", data);
      console.timeEnd("execute");
    });
  }
}

const withTime = new WithTime();

withTime.on("data", (data) => {
  console.log(`Length: ${data.length}`);
});

//error listeners prevent the process from crashing, the other operations can proceed to execute
withTime.on("error", (err) => {
  console.error;
});

//In case of uncaught exceptions it's better to terminate the process as soon as one arise. Using "process.on" to handle uncaught exceptions can cause the listener to trigger multiple times and interrupt clean up operations. The "process.once" listener will  trigger only once, on first uncaughtException event

// process.once("uncaughtException", (err) => {
//   console.log(err.message);
//   // do some cleanup
//   process.exit(1); // exit anyway
// });

withTime.execute(fs.readFile, "");
withTime.execute(fs.readFile, __filename);
