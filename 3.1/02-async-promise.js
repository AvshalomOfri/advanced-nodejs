const fs = require("fs");

//The readFile is wrapped in a promise, the promise exposes to functions: resolve, for succesful reading of the file, and reject, for handling errors.
const readFileAsArray = function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) {
        return reject(err);
      }

      const lines = data.toString().trim().split("\n");
      resolve(lines);
    });
  });
};

// example call
const path = "C:/Users/PCP-RENT/VS Codium Projects/advanced-nodejs/3.1/numbers";

readFileAsArray(path)
  .then((lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((number) => number % 2 === 1);
    console.log("odd numbers count:", oddNumbers.length);
  })
  .catch(console.error);
