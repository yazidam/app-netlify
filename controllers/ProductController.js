const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const product = new Product({
    name: "product1",
    owner: req.user._id,
    category: "home",
    color: "red",
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
};

module.exports = {
  createProduct,
};
