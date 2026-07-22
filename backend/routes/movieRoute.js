import express from "express";
import { postMovie } from "../controllers/movieController.js";
import { getMovie } from "../controllers/movieController.js";
import { updateMovie } from "../controllers/movieController.js";
import { deleteMovie } from "../controllers/movieController.js";

const router = express.Router();

// router.post("/post", postMovie);
// router.get("/get", getMovie);
// router.put("/update/:id", updateMovie);
// router.delete("/delete/:id", deleteMovie);

export default router;
