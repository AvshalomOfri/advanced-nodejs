function sum(arguments) {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    // console.log(total);
  }
  return total;
}

console.log(sum([3, 4, 5, 3, 7]));
