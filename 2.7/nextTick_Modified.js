const fs = require("fs");
//the cb function argument passed to the fileSize function has been modified to throw an exception instead of an error, this way the process won't terminate in case of a non-string argument
function fileSize(fileName, cb) {
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

fileSize(__filename, (err, size) => {
  if (err) {
    console.log(err.name);
  } else {
    console.log(`Size in KB: ${size / 1024}`);
  }
  // if (err) throw err;
});

fileSize(1, (err, size) => {
  if (err) {
    console.log(err.name);
  } else {
    console.log(`Size in KB: ${size / 1024}`);
  }
  // if (err) throw err;
});

console.log("HELLOOOOOOOOOOOOOOOOOO!");
console.log("DDDDO!");
