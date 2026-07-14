import User from "../models/User.js";
import bcrypt from "bcrypt";
//Register user
export const registerUser = async (req, res) => {
  const { username, email, password, avatar } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        message: `Username ${username} already exists. Please choose a different username.`,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      avatar,
    });
    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      avatar: newUser.avatar,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
    res.status(201).json({
      message: "User registered successfully!",
      data: userResponse,
      success: true,
      user: userResponse,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "An error occurred while registering the user.",
      error: error.message,
      success: false,
    });
  }
};
