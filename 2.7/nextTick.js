const fs = require("fs");

//The file size function below can be both sync and async depending on the first argument, which is bad design. A function should either sync or async

function fileSize(fileName, cb) {
  //The if statement below validates the first argument, in case of an error it will throw synchronously and prevent the next operation (console.log("Hello!")) from executing:
  // if (typeof fileName !== "string") {
  //   return cb(new TypeError("argument should be string"));
  // }

  //In this refactoring of the validation we use process.nextTick to throw the error, this way the error will throw asynchronously without blocking other sync operations. The console log is free to log "hello", and once the next tick begins the error will throw. The filesize function is now asynchronous!
  if (typeof fileName !== "string") {
    return process.nextTick(cb, new TypeError("argument should be string"));
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      // console.log("invalid type");
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => {
  if (err) {
    console.log(err.name);
  } else {
    console.log(`Size in KB: ${size / 1024}`);
  }
  // if (err) throw err;
});

fileSize(__filename, (err, size) => {
  if (err) {
    console.log(err.name);
  } else {
    console.log(`Size in KB: ${size / 1024}`);
  }
  // if (err) throw err;
});

console.log("HELLOOOOOOOOOOOOOOOOOO!");
console.log("DDDDO!");
