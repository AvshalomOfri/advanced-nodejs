const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xc2, 0xa2]);
// console.log(cent);
console.log(decoder.write(cent));

const euro = Buffer.from([0xe2, 0x82, 0xac]);
// console.log(euro);
console.log(decoder.write(euro));

console.log(global.Buffer.from);
