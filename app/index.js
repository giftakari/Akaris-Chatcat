"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("login");
});

router.get("/info", (req, res, next) => {
  res.send(`<h2>Welcome to information</h2>`);
});

module.exports = {
  router,
};
