const dns = require("dns"); // name -- addresses

dns.lookup("pluralsight.com", (err, address) => {
  console.log(address);
});
dns.reverse("52.24.147.215", (err, hostName) => {
  console.log(hostName);
});

// dns.resolve4("pluralsight.com", (err, address) => {
//   console.log(address);
// });

// dns.resolveMx("google.com", (err, address) => {
//   console.log(address);
// });

// translate an ip adress back to its hostname
// dns.reverse("35.161.75.227", (err, hostnames) => {
//   console.log(hostnames);
// });
