const express = require("express");
const cors = require("cors");
const homeRouter = require("./routes/home.router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/quiz", homeRouter);

module.exports = app;
