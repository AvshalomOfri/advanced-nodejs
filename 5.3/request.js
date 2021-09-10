const https = require("https");

// req: http.ClientRequest class
const req = https.get("https://www.google.com", (res) => {
  // res: http.IncomingMessage class
  // console.log(res.statusCode);
  // console.log(res.headers);
  res.on("data", (data) => {
    console.log("got the data");
    // console.log(data.toString());
  });
});
//reminder: event-driven error handling
req.on("error", (e) => console.log(e));

console.log(req.agent); // http.Agent class
