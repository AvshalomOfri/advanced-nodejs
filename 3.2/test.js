function fetch(asyncFunc) {
  return new Promise((resolve, reject) => {
    if (asyncFunc === "string") {
      resolve(asyncFunc);
    }
    reject("error");
  });
}

const timer = setTimeout(() => {
  return "success";
}, 2000);

fetch(timer);
