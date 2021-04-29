const fs = require("fs");

const conversionMap = {
  88: "71",
  89: "72",
  90: "73",
};

fs.readFile(__filename, (err, buffer) => {
  let tag = buffer.slice(-5, -1);

  for (let i = 0; i < tag.length; i++) {
    tag[i] = conversionMap[tag[i]];
  }

  console.log(buffer.toString());
});
// Even though a "tag" variable has been assigned a slice of the buffer and its charaters has been converted, the original buffer has been modified as well because the sliced buffer and the original one share the same memory space
// TAG: XYZ
