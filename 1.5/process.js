// process is an event emitter
//the process object provides a bridge between the node application and its running environment

process.on('exit', (code) => {
  // do one final synchronous operation
  // before the node process terminates

  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  // something went unhandled.
  // Do any cleanup and exit anyway!

  console.error(err); // don't do just that...

  // ...FORCE exit the process too!
  //if you just decalre a handler ,i.e. "log(err)", the process won't terminate and will proceed in an unpredictable state
  process.exit(1);
});

// keep the event loop busy
process.stdin.resume();

// trigger a TypeError exception
console.dog();
