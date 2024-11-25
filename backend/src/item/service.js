const express = require("express");
const router = express.Router();
const {
  createItem,
  readItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("./dal");

//Create Items
router.post(`/item`, async (req, res) => {
  const name = req.body.name;
  const des = req.body.description;
  console.log(" name : ", name, " des : ", des);
  try {
    const item = await createItem(name, des);
    res.json({ item: item });
    console.log("Created Item : ", item);
  } catch (error) {
    console.error("Failed to create Item ", error.message);
    res.status(400).json({ error: error.message });
  }
});

//Get Items
router.get(`/items`, async (req, res) => {
  try {
    const items = await readItems();
    console.log("Items : ", items);
    res.status(200).send(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
});

//Update item
router.patch(`:itemId/item`, async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const item = await getItemById(itemId);
    if (!item) {
      res.status(400).json({ error: "Item does not Exist" });
      return;
    }
    const updatedItem = await updateItem(itemId, req.body);
    res.status(200).json(updateItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update Item" });
  }
});

//delete Item
router.delete(`/:itemId/delete`, async (req, res) => {
  const itemId = req.params.itemId;
  console.log("Item Id : ", itemId);
  try {
    const dltItem = await deleteItem(itemId);
    if (dltItem) {
      return res.json({ message: "Deleted Item successfully" });
    } else {
      return res.status(404).json({ error: "Item to delete not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to Delete Item" });
  }
});

module.exports = router;
