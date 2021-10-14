const { Readable } = require("stream");

// const inStream = new Readable();

// inStream.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// inStream.push(null); //signals the end of data on the stream
// inStream.pipe(process.stdout);

//this refactoring of the above code will stream the code only when the user ask for it, instead of just dumping the whole stream into memory before it's being requested

const inStream = new Readable({
  read() {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  },
});

inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

process.on("exit", () => {
  console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});
process.stdout.on("error", process.exit);
