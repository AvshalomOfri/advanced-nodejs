const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  console.log(`Master PID: ${process.pid}`);

  cluster.on("exit", (worker, code, signal) => {
    //if worker crashed, fork a new one. otherwise, do nothing.
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. ` + "Starting a new worker...");
      cluster.fork();
    }
  });

  //SIGUSR2 is general purpose signal triggered by the user (only available on linux) which can be triggered with a "kill -SIGUSR2 PID" command, this way the master process will not be killed but only instructed to do something
  process.on("SIGUSR2", () => {
    const workers = Object.values(cluster.workers);

    //This function will restart workers one by one, to maintain service availability.
    const restartWorker = (workerIndex) => {
      const worker = workers[workerIndex];
      if (!worker) return; //stop condition (for recursive calls)

      //listen for worker exit than fork a new one
      worker.on("exit", () => {
        if (!worker.exitedAfterDisconnect) return; //check if exited or crashed
        console.log(`Exited process ${worker.process.pid}`);
        // the 'listening' event reports that the worker is connected and ready, than the restartWorker function is called again to launch the next worker (We can't just restart the next worker right after a fork call because the fork action is not synchronous)
        cluster.fork().on("listening", () => {
          restartWorker(workerIndex + 1);
        });
      });

      worker.disconnect();
    };

    restartWorker(0);
  });
} else {
  require("./server");
}
