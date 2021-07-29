const http = require("http");

const server = http.createServer((req, res) => {
  res.end("welcome");
});

// Using event Emitter API

const server = http.createServer();
// emits requist event
// subcribe to it / Listen for it / respond to it

server.on("request", (req, res) => {
  res.end("welcome");
});
server.listen(5000);
