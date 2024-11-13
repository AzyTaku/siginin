//Login Routes
const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("./dal");

router.post(`/login`, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const token = await authenticateUser(email, password);
    console.Log("Login Authentication Success for : ", email, " ", password);
    res.json({ token: token });
  } catch (error) {
    console.error("Login Authentication Failed : ", error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post(`/signup`, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const token = await createUser(email, password);
    res.json({ token: token });
    console.log("User Created with Token : ", token);
  } catch (error) {
    console.error("Failed to Create User : ", error.message);
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:userId/user", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ error: "user not found" }); //error if no user Id
      return;
    }
    const updatedUser = await updateUser(userId, req.body);
    res.status(202).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update User" });
  }
});

router.delete("/:userId/delete", async (req, res) => {
  const userId = req.params.id;
  console.log("Log to Delete - UserId : ", userId);
  try {
    const success = await deleteUser(userId);
    if (success) {
      res.send({ message: "User deleted successfully!" });
    } else {
      res.status(404).send({ error: "User not found!" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the user." });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users); // Send the list of users in the response
  } catch (error) {
    res.status(500).send({ error: "Failed to retrieve users." });
  }
});

module.exports = router;
