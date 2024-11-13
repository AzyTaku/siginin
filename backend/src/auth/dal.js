const { User, secret_key } = require("../index.js");
const jwt = require("jsonwebtoken");
const { generateRandomString } = require("../utils/util.js");

async function authenticateUser(email, password) {
  const user = await User.findOne({ email });

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

// READ - Get user by Id
async function getUserById(userId) {
  const user = await User.findById(userId);
  if (!user) {
    console.log("User with ID:", userId, "not found");
    throw new Error("User not found");
  }

  return user;
}

//UPDATE
async function updateUser(userId, updateData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.error(`Error Updating Notes by ${userId}:`, error);
    return null;
  }
}

//Delete User
async function deleteUser(userId) {
  try {
    const result = await User.deleteOne({ _id: userId });
    console.log("Dal DeleteUser result : ", result);

    if (result.deletedCount > 0) {
      console.log("User deleted successfully!");
      return true;
    } else {
      console.log("Failed to Delete User!");
      return false;
    }
  } catch (error) {
    console.log("Error deleting user :", error);
    throw error;
  }
}

//Get all Users
async function getAllUsers() {
  try {
    const users = await User.find(); // This retrieves all users from the User collection
    return users; // Return the list of users
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error; // Propagate the error to be handled by the caller
  }
}

module.exports = {
  authenticateUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
