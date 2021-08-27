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

//listeners assigned to the same event will be triggered in the order they are listed

withTime.on("data", (data) => {
  console.log(`Length: ${data.length}`);
});

withTime.on("data", (data) => {
  console.log(data.toString().indexOf("class"));
});

withTime.prependListener("data", (data) => {
  console.log("i'm being called last...but i'm logged first!");
  console.log(data);
});

// withTime.removeListener ...

withTime.execute(fs.readFile, __filename);
