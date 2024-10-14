//Login Routes
const express = require("express");
const router = express.Router();
const { authenticateUser, createUser } = require("./dal");

router.post(`/login`, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const token = await authenticateUser(email, password);
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
module.exports = router;
