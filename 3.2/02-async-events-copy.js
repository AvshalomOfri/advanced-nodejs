const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc) {
    this.emit('begin');
    asyncFunc();
  }
}
const bool = false;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (bool) {
      resolve('success');
    } else {
      reject(new Error());
    }
  }, 2000);
});

const myAsync = function () {
  myPromise
    .then(function (data) {
      withTime.emit('data', data);
      withTime.emit('end');
    })
    .catch(function (error) {
      withTime.emit('error');
      withTime.emit('end');
    });
};

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', () => console.log('error during async operation'));
withTime.on('data', (data) => console.log('data is ready'));

// withTime.execute(fs.readFile, 1);
withTime.execute(myAsync);
