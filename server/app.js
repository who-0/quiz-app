const express = require("express");
const homeRouter = require("./routes/home.router");

const app = express();

app.use(homeRouter);

module.exports = app;
