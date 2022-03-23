//Los Require
const express = require("express");
const path = require("path");

const app = express();

app.listen(4000, () => console.log("Running on port 4000"));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
