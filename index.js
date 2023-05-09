const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // synchronous way to call api
  const data = fs.readFileSync(`${__dirname}/userApi/UserApi.json`, "utf-8");

  if (req.url == "/") {
    res.end("Hello home");
  } else if (req.url == "/about") {
    res.end("Hello about");
  } else if (req.url == "/users") {
    // asynchrounous way to call api
    // res.end("Hello contact");
    // console.log("__dirname", __dirname);
    // fs.readFile(`${__dirname}/userApi/UserApi.json`, "utf-8", (err, data) => {
    //   console.log("data", JSON.parse(data));
    //   res.end(data);
    // });
    // synchronous way
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end(" 404");
  }
});

server.listen(3000);
