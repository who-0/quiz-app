const express = require("express");
const homeRouter = require("./routes/home.router");

const app = express();

app.use(express.json());
app.use("/api/quiz", homeRouter);

module.exports = app;
