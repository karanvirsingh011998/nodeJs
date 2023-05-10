const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/profile", (req, res) => {
  const user = {
    name: "anil",
    email: "test@test.com",
    skills: ["html", "css", "js"],
  };
  res.render("profile", { user });
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/error.html`);
});

app.listen(3000);
