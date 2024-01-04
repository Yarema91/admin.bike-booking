const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const bikeRouter = require("./routes/api/bikes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/bikes", bikeRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
