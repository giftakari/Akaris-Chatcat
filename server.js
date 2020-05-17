"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const chatCat = require("./app");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", chatCat.router);

app.get("/contact", (req, res) => {});

app.get("/about", (req, res) => {
  console.log(req.path);
  res.send("<h1>About</h1> Akaris Welcome to Akaris Travels and Tours ltd");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
