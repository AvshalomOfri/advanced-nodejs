//when converting streams of binary data we should use the StringDecoder module because it handles multibyte characters much better, especially incomplete mutibyte characters. the string decoder preserves the incomplete encoded characters internally until its complete and then returns the result, the default toString() operation on the buffer does not do that
const { StringDecoder } = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf8");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    const buffer = Buffer.from([chunk]);
    console.log("With .toString():", buffer.toString());
    console.log("With StringDecoder:", decoder.write(buffer));
  }
});

// 0xE2, 0x82, 0xAC -> €
