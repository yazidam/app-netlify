const express = require("express");
const { createProduct } = require("../controllers/ProductController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createProduct);

module.exports = router;
