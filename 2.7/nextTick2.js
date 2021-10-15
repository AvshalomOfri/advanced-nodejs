// A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

const timeout = 2000;

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
  console.log("--next tick 1");
  process.nextTick(() => console.log("--next tick 2"));
});

console.log("root code - END - event loop takes over");
