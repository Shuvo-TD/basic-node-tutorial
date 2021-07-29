const { write } = require("fs");
var http = require("http");
var URL = require("url");

var server = http.createServer(function (req, res) {
  var myURL = "https://github.com/Shuvo-TD/basic-node-tutorial";

  var myURLObj = URL.parse(myURL, true);

  var myHostName = myURLObj.host;
  var myParhName = myURLObj.pathname;
  var SearchName = myURLObj.search;

  res.writeHead(200, { "content-type": "text/html" });
  res.write(mySearchName);
  res.end();
});

server.listen(5050);
console.log("Server is Running");
