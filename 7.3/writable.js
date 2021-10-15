// const { Writable } = require("stream");

//echo to console:

// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   },
// });
// process.stdin.pipe(outStream);

//A more concise implementation:
process.stdin.pipe(process.stdout);

// process.stdout.write("hello console");
