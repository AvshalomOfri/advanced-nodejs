// const { Writable } = require('stream');
//
// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });
//
// process.stdin.pipe(outStream);

// process.stdout.write("hello console");
process.stdin.pipe(process.stdout);
