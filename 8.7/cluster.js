const cluster = require("cluster");
const os = require("os");

// **** Mock DB Call
const numberOfUsersInDB = function () {
  this.count = this.count || 5;
  this.count = this.count * this.count;
  return this.count;
};
// ****

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  const updateWorkers = () => {
    const usersCount = numberOfUsersInDB();
    //list all existing workers...
    Object.values(cluster.workers).forEach((worker) => {
      //...and send a message to each one
      worker.send({ usersCount });
    });
  };
  updateWorkers();
  setInterval(updateWorkers, 8000);
} else {
  require("./server");
}
