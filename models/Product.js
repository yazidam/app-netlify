const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: { type: String },
    category: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
