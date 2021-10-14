const fs = require("fs");

//the async function allow us to treat async code as if it was linear

const readFileAsArray = function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) {
        return reject(err);
        // return cb(err);
      }

      const lines = data.toString().trim().split("\n");
      resolve(lines);
      // cb(null, lines);
    });
  });
};

//example call
const path = __dirname + "/numbers";

async function countOdd() {
  try {
    const lines = await readFileAsArray(path);
    const numbers = lines.map(Number);
    const oddCount = numbers.filter((number) => number % 2 === 1).length;
    console.log("odd numbers count:", oddCount);
  } catch (err) {
    console.error(err);
  }
}

countOdd();
