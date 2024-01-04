const { Bike } = require("../models/bike");
const { schemas } = require("../models/bike");
const { httpError, ctrlWrapper } = require("../utils");

const getAll = async (req, res) => {
  const result = await Bike.find();
  res.json(result);
};

const add = async (req, res) => {
  const { id } = req.body;
  const { error } = schemas.addSchema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const bike = await Bike.findOne({ id });

  if (bike) {
    throw httpError(409, "Bike with the same ID already exists");
  }

  const result = await Bike.create(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  if (id === "null" || id === "undefined") {
    throw httpError(400, "Bad request");
  }

  const result = await Bike.findByIdAndDelete(id);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.status(202).json(result);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { error } = schemas.updateStatusSchema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const result = await Bike.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateStatus: ctrlWrapper(updateStatus),
};
