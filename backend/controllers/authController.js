import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    const ispasswordValid = await bcrypt.compare(password, user.password);
    if (!ispasswordValid) {
      return res.status(401).json({ message: "password not matched" });
    }

    //generate jwt token
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user._id,
        usernme: user.username,
        avatar: user.avatar,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age },
    );

    const userResponse = {
      _id: user._id,
      email: user.email,
      username: user.username,
      password: user.password,
      avatar: user.avatar,
      createdAt: user.createAt,
      updatedAt: user.updatedAt,
    };

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "user loged in successfully", data: userResponse });
  } catch (error) {
    res.status(500).json({ meesage: "internal server error" });
    console.error(error);
  }
};

//logout user
export const logoutUser = (req, res) => {
  res.clearCookie("token").status(200).json({ msg: "Logged out successfully" });
};
