"use strict";

const autocannon = require("autocannon");
const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

const instance = autocannon(
  {
    url: "http://localhost:8000",
    duration: 3, // default
    setupClient: setupClient,
  },
  (err, result) => handleResults(result)
);
// results passed to the callback are the same as those emitted from the done events
instance.on("done", handleResults);

instance.on("tick", () => console.log("ticking"));

instance.on("response", handleResponse);

function setupClient(client) {
  client.on("body", console.log); // console.log a response body when its received
}

function handleResponse(client, statusCode, resBytes, responseTime) {
  console.log(
    `Got response with code ${statusCode} in ${responseTime} milliseconds`
  );
  console.log(`response: ${resBytes.toString()}`);
  //   console.log(`response: ${decoder.write(resBytes.toString())}`);
  // console.log(JSON.stringify(resBytes.toString()));

  //update the body or headers
  //   client.setHeaders({ new: "header" });
  //   client.setBody("new body");
  //   client.setHeadersAndBody({ new: "header" }, "new body");
}

function handleResults(result) {
  console.log("done");
}
