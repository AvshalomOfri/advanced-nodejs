const fs = require("fs");

const src = fs.createReadStream("7.1/big.file");
const dst = fs.createWriteStream("7.1/write.txt");
src.pipe(dst);
