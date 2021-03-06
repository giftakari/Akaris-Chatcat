"use strict";
const express = require("express");
const router = express.Router();

module.exports = () => {
  let routes = {
    get: {
      "/": (req, res, next) => {
        res.render("login");
      },
      "/rooms": (req, res, next) => {
        res.render("rooms");
      },
      "/chat": (req, res, next) => {
        res.render("chatroom");
      },
    },
    post: {},
  };

  let registerRoutes = (routes, method) => {
    for (let key in routes) {
      if (
        typeof routes[key] === "object" &&
        routes[key] !== null &&
        !(routes[key] instanceof Array)
      ) {
      }
    }
  };
};
