const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, unique: true, required: true },
});

module.exports = ItemSchema;
