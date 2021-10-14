const fs = require("fs");

//The readFile is wrapped in a promise, the promise exposes the resolve and reject functions. Resolve for handling a successful async action and reject for handling a failed one.
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
const path = __dirname + "/numbers";

readFileAsArray(path)
  .then((lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((number) => number % 2 === 1);
    console.log("odd numbers count:", oddNumbers.length);
  })
  .catch(console.error);
