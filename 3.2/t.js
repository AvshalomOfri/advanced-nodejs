const bool = true;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (bool) {
      resolve('success');
    } else {
      reject(new Error('fail'));
    }
  }, 2000);
});

const myAsync = function () {
  myPromise
    .then(function (done) {
      console.log(done);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};
myAsync();
