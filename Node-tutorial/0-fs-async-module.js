var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(4040);
console.log("Server is running");
