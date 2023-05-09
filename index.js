const http = require("http");
const fs = require("fs");
// const app = require("./app");
const server = http.createServer((req, res) => {
  // synchronous way to call api
  const data = fs.readFileSync(`${__dirname}/userApi/UserApi.json`, "utf-8");
  var a;
  const b = null;
  if (req.url == "/") {
    res.end("Hello home");
    // console.log("app.x", app.x);
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
    console.log("a==b", a === b);
    res.end(" 404");
  }
});

server.listen(3000);

// short hand
// http.createServer().server(3000)
