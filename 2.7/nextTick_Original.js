const fs = require("fs");

//this function can be both sync or async depending on the argument, this is bad design.  A function should either sync or async.
function fileSize(fileName, cb) {
  if (typeof fileName !== "string") {
    //by calling nextTick() the process waits for the next event loop cycle before throwing, effectively turning the fileSize function async.
    return process.nextTick(cb, new TypeError("argument should be string"));
    // return cb(new TypeError("argument should be string"));
  }

  fs.stat(fileName, (err, stats) => {
    //check for actual errors
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => {
  if (err) throw err;

  console.log(`Size in KB: ${size / 1024}`);
});

console.log("Hello!");
