function main() {
  process.nextTick(() => console.log("tick1"));
}
main();
console.log("test1");
console.log("1st log");
