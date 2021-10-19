"use strict";
//this module is used for measuring server benchmarks
const autocannon = require("autocannon");

autocannon(
  {
    url: "http://localhost:8000",
    connections: 200, //default
    pipelining: 1, // default
    duration: 3, // default
    resultObject: true,
    // json: true,
  },
  console.log
);
