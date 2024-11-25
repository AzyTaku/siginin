const { Item } = require("../index.js");

async function createItem(name, description) {
  //code to Create Item
  try {
    const createNote = await Item.create({ name, description });
    return createNote;
  } catch (error) {
    throw error;
  }
}
async function readItems() {
  //code to Read Items
  try {
    const getItem = await Item.find();
    return getItem;
  } catch (error) {
    throw error;
  }
}
async function getItemById() {
  //code to get Item by id
  try {
    const getItem = await Item.find({ user_id: userId, direction: "income" });
    return getItem;
  } catch (error) {
    throw error;
  }
}
async function updateItem() {
  //code to update Item
}

async function deleteItem(id) {
  //code to delete Item
  try {
    const result = await Item.findOneAndDelete({
      _id: id,
    });
    return result !== null; // Returns true if an Item was deleted, false otherwise
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createItem,
  readItems,
  getItemById,
  updateItem,
  deleteItem,
};
