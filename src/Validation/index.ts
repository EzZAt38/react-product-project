import { Icard } from "../interfaces/interface";
/**
 * Validates a product object according to specified rules.
 *
 * @param {Icard} product - The product object to validate.
 * @returns {Icard} An error object with validation messages for each field.
 *
 * Validation rules:
 * - title: Must be trimmed, between 10 and 80 characters.
 * - description: Must be trimmed, between 20 and 200 characters.
 * - imageURL: Must be a non-empty, valid URL.
 * - price: Must be a non-empty, numeric value greater than 0.
 *
 * If a field is valid, its value in the returned error object will be an empty string.
 * If a field is invalid, its value will be a descriptive error message.
 */
export const Validation = (product: Icard): Icard => {
  const error: Icard = {
    description: "",
    price: "",
    imageURL: "",
    title: "",
  };
  const validURL = /^(https|http|ftp):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    error.title = "Product name must be between 10 and 80 characters.";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    error.description = "Description must be between 20 and 200 characters.";
  }
  if (!product.imageURL.trim() || !validURL) {
    error.imageURL = "Valid image is required.";
  }
  if (
    !product.price.trim() ||
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    error.price = "Price must be a valid number greater than 0.";
  }
  return error;
};
