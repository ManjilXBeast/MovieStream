import User from "../models/User.js";

// update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, avatar } = req.body;

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check for duplicate username or email (excluding current user)
    const existingUser = await User.findOne({
      $and: [{ _id: { $ne: id } }, { $or: [{ email }, { username }] }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        email,
        avatar,
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators
      },
    ).select("-password");

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error("Error updating user:", error);
  }
};
