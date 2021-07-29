const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>we cxan't find the page</p>
  <a href ='/'>back home</a>
  `);
});

server.listen(5000);
