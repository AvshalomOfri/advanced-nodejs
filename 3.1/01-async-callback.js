const fs = require("fs");

const readFileAsArray = function (file, cb) {
  fs.readFile(file, function (err, data) {
    if (err) {
      return cb(err);
    }

    const lines = data.toString().trim().split("\n");
    cb(null, lines);
  });
};

// example call
const path = "C:/Users/PCP-RENT/VS Codium Projects/advanced-nodejs/3.1/numbers";

readFileAsArray(path, (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number); // convert each array element from string to number
  const oddNumbers = numbers.filter((number) => number % 2 === 1);
  console.log("odd numbers count:", oddNumbers.length);
  console.log(oddNumbers);
});
