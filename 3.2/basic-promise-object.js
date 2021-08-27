const rain = false;
//The promise object
const rainCheck = new Promise((resolve, reject) => {
  if (!rain) {
    const dinnerOutside = {
      time: '10pm',
      dinners: '10',
      menu: 'italian',
    };
    resolve(dinnerOutside);
  } else {
    reject(new Error(`dinner's off`));
  }
});

rainCheck
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));
