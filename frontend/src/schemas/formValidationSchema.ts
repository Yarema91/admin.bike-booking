import * as zod from "zod";

export const validationSchema = zod
  .object({
    name: zod
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
    type: zod
      .string({
        required_error: "Type is required",
        invalid_type_error: "Type must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
    color: zod
      .string({
        required_error: "Color is required",
        invalid_type_error: "Color must be a string",
      })
      .min(3, { message: "Field must contain at least 5 characters." }),
    wheelSize: zod
      .number({
        required_error: "Wheel size is required",
        invalid_type_error: "Wheel size must be a number",
      })
      .max(28, { message: "Maximum wheel size 28 inches" }),
    price: zod.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    id: zod
      .string({
        required_error: "ID is required",
        invalid_type_error: "ID must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .max(13, { message: "Field must contain a maximum of 13 characters" })
      .trim(),
    description: zod
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
  })
  .required();
