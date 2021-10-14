const fetch = require("node-fetch");
const fs = require("fs");

async function goGet(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    fs.writeFile("3.1/users.json", JSON.stringify(data), (err) => {
      if (err) {
        return err;
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

goGet("https://jsonplaceholder.typicode.com/users");
