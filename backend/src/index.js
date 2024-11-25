const mongoose = require("mongoose");
const userSchema = require("./schema");
const ItemSchema = require("./ItemsSchema");

require("dotenv").config();

const mongoToken = process.env.mongodb;
const secret_key = process.env.SECRET_KEY;
const connection = mongoose.createConnection(mongoToken);

const User = connection.model("user", userSchema);
const Item = connection.model("Item", ItemSchema);
module.exports = {
  User,
  Item,
  secret_key,
};
