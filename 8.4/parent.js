const { fork } = require("child_process");
//The main difference between spawn() and fork() is that fork establish a communication channel between child and parent where messages can be exchanged via an interface similar to the event emitter module
const forked = fork("child.js");

forked.on("message", (msg) => {
  console.log("Message from child", msg);
});

forked.send({ hello: "world" });
