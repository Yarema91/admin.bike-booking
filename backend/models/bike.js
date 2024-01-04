const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    wheelSize: { type: Number, required: true },
    price: { type: Number, required: true },
    id: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Available" },
  },
  { timestamps: false, versionKey: false }
);

bikeSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  color: Joi.string().required(),
  wheelSize: Joi.number().required(),
  price: Joi.number().required(),
  id: Joi.string().required(),
  description: Joi.string().required(),
});

const updateStatusSchema = Joi.object({
  status: Joi.string().required(),
});

const Bike = model("bike", bikeSchema);
const schemas = { addSchema, updateStatusSchema };

module.exports = { Bike, schemas };
