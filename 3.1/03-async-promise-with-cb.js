const fs = require("fs");

//Promises are neat and concise, but callbacks are the original, idiomatic pattern of node for handling async operations, so developers who use your api might expect a callback interface. You can keep the promise interface and add the callback interface to it

const readFileAsArray = function (file, cb = () => {}) {
  // empty cb added as default value since the callback mechanism is used
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) {
        //a promise call AND a cb call
        reject(err);
        return cb(err);
      }

      const lines = data.toString().trim().split("\n");
      //a promise call AND a cb call
      resolve(lines);
      cb(null, lines);
    });
  });
};

// example call
const path = __dirname + "/numbers";

readFileAsArray(path, (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter((number) => number % 2 === 1);
  console.log("odd numbers count:", oddNumbers.length);
});
