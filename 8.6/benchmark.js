"use strict";
//this module is used for measuring server benchmarks
const autocannon = require("autocannon");

autocannon(
  {
    url: "http://localhost:8000",
    connections: 50, //default
    pipelining: 1, // default
    duration: 5, // default
  },
  console.log
);
