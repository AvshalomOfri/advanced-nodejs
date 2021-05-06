const timeout = 10;

console.log("root code - Start");

setTimeout(() => {
  console.log("--timeout 1");
}, timeout);
setImmediate(() => console.log("--immediate 1"));

setTimeout(() => {
  setTimeout(() => {
    console.log("--timeout 3");
  }, timeout);
  setImmediate(() => console.log("--immediate 2"));
  console.log("--timeout 2");
  process.nextTick(() => console.log("--next tick 3"));
}, timeout);

process.nextTick(() => {
  process.nextTick(() => console.log("--next tick 2"));
  console.log("--next tick 1");
});

console.log("root code - END - event loop takes over");
