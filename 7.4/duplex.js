//every duplex stream must have both write and read methods. It important to understand that the read and write components are operating independently from one another, this is merely a grouping of two featues in one object
const { Duplex } = require("stream");

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null);
      console.log(size);
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  },
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
