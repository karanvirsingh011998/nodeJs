const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("hello , this is homepage");
});

app.get("/about", (req, res) => {
  res.send("hello , this is about page");
});

app.get("/contact", (req, res) => {
  res.send("hello , this is about page");
});

app.listen(3000);
