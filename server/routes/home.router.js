const express = require("express");
const homeRouter = express.Router();
const { getHome } = require("../controllers/home.controller");

homeRouter.get("/", getHome);

module.exports = homeRouter;
