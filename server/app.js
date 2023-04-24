const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const homeRouter = require("./routes/home.router");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000", methods: "get" }));
app.use("/api/quiz", homeRouter);
app.get("/*", (req, res) => {
  res.status(404).json({ error: "Your request is not defined on our system" });
});

module.exports = app;
