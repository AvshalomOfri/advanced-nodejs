const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

const cent = Buffer.from([0xc2, 0xa2]);
// console.log(cent);
console.log(decoder.write(cent));

try {
  const euro = Buffer.from(0xe2, 0x82, 0xac);
} catch (error) {
  console.log(error.message);
}
// console.log(euro);
console.log(decoder.write(euro));

console.log(global.Buffer.from);
