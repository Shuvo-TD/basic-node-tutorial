var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    let mydata = fs.readFileSync("home.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(mydata);
    res.end();
  }
});

server.listen(4040);
console.log("Server is Runing");
