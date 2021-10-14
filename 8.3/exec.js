const { exec } = require("child_process");

//unlike spawn(), the exec() method opens up a shell to run the command, and can take in regular shell syntax as arguments. exec() buffers the result output to a callback function. exec() is suitable for smaller data size, spawn() will handle larger data by streaming it with the stdio object.
exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
