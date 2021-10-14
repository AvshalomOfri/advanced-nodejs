//a cluster facilitates scalability across multiple cpu threads

const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  //checking if the current process is the master
  const cpus = os.cpus().length;
  //instantiate a new server for each core i.e. forking a worker process for each cpu core
  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  require("./server");
}

//each worker is a seperate node process with its own event loop and memory space
