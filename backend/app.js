import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import movieRoute from "./routes/movieRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://moviestreamfrontend.onrender.com",
    credentials: true,
  }),
);

// app.listen(process.env.Port, () => {
// console.log(`Server is running on port ${process.env.Port}`);
// });

// app.post("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.post("/home", (req, res) => {
//   res.status(200).json({ message: "Welcome to the home page!" });
// });

app.use("/api/movie", movieRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

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
