const EventEmitter = require("events");
//The EventEmitter is a module that facilitate communication between objects in node

//this code run synchronounsly
class WithLog extends EventEmitter {
  async execute(taskFunc) {
    console.log("Before executing");
    this.emit("begin");
    const counter = await taskFunc()._onTimeout();
    console.log(counter);
    this.emit("end");
  }
}

const withLog = new WithLog();

withLog.on("begin", () => console.log("About to execute"));
withLog.on("end", () => console.log("Done with execute"));

//if taskFunc() is async it will resolve after the "end" and "after executing" are logged, which is chronologically wrong.
withLog.execute(() =>
  setTimeout(() => {
    return "9898";
    // return count(8);
  }, 2000)
);

function count(number) {
  let arr = [];
  for (let i = 0; arr.length <= number; i++) {
    arr.push(i);
  }
  return arr;
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (rd) => (data = data + rd));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    });
  });
}
