import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// app.listen(process.env.Port, () => {
// console.log(`Server is running on port ${process.env.Port}`);
// });

app.post("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the home page!" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.error("Database connection error:", error);
  });
