const express = require("express");
const app = express();
const route = express.Router();

// const reqFilter = (req, res, next) => {
//   console.log("hello");
//   next();
// };
// this is used on all the routes
// app.use(reqFilter);

//on one or two
// const reqFilter = require("./middleware");

// app.get("", reqFilter, (req, res) => {
//   res.send("hello , this is homepage");
// });

// app.get("/about", (req, res) => {
//   res.send("hello , this is about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("hello , this is about page");
// });

// when we want to use on multiple route

const reqFilter = require("./middleware");
route.use(reqFilter);
app.get("", (req, res) => {
  res.send("hello , this is homepage");
});

route.get("/about", (req, res) => {
  res.send("hello , this is about page");
});

route.get("/contact", (req, res) => {
  res.send("hello , this is about page");
});

app.use("/", route);

app.listen(3000);
