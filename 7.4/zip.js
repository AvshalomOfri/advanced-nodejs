const crypto = require("crypto");
const fs = require("fs");
const zlib = require("zlib");
const file = __dirname + "/test.file";
// const file = process.argv[2];

const { Transform } = require("stream");

const progress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write(".");
    callback(null, chunk);
  },
});

//the file is compressed with Zlib than encrypted with crypto. Later it will be unencrypted and than decompressed in the unzip.js
fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher("aes192", "a_secret"))
  // .on("data", () => process.stdout.write("."))
  .pipe(progress) //replaces the above data event listener.
  .pipe(fs.createWriteStream(file + ".zz"))
  .on("finish", () => console.log("Done"));
