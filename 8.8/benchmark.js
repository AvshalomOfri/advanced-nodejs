"use strict";
//this module is used for measuring server benchmarks
const autocannon = require("autocannon");

autocannon(
  {
    url: "http://localhost:8080",
    connections: 200, //default
    pipelining: 1, // default
    duration: 3, // default
  },
  console.log
);
