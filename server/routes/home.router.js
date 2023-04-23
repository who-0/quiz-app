const express = require("express");
const homeRouter = express.Router();
const { getHome, postHome } = require("../controllers/home.controller");

homeRouter.get("/", getHome);
homeRouter.post("/", postHome);

module.exports = homeRouter;
