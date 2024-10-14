const { User, secret_key } = require("../index.js");
const jwt = require("jsonwebtoken");
const { generateRandomString } = require("../utils/util.js");

async function authenticateUser(email) {
  const user = User.findOne({ email });

  if (!user) {
    console.log("User with Email : ", email, " not Found");
    throw new Error("User not Found");
  }

  if (user.password !== password) {
    throw new Error("Invalid Password ");
  }
  const token = jwt.sign(
    {
      user_id: user._id,
      email: user.email,
      refresh_token: user.refresh_token,
    },
    secret_key,
    { expiresIn: "30d" }
  );
  return token;
}

async function createUser(email, password) {
  const user = await User.create({
    email,
    password,
    refresh_token: generateRandomString(10),
  });
  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
      refresh_token: user.refresh_token,
    },
    secret_key,
    {
      expiresIn: "30d",
    }
  );
  return token;
}

module.exports = {
  authenticateUser,
  createUser,
};
