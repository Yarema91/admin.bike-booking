const express = require("express");

const bikes = require("../../controllers/bikes");

const router = express.Router();

router.get("/", bikes.getAll);

router.post("/", bikes.add);

router.delete("/:id", bikes.deleteById);

router.patch("/:id", bikes.updateStatus);

module.exports = router;