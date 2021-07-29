// const fs = require("fs");
// const EventEmitter = require("events");

// class Counter extends EventEmitter {
//   execute(asyncFunc, ...args) {
//     this.emit("begin");
//     asyncFunc(...args, (err, data) => {});
//   }
// }

// Counter.execute(count, 5);

function count(number) {
  let arr = [];
  for (let i = 0; arr.length <= number; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(count(5));
