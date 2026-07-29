import express from "express";
import {
  deleteMovie,
  getAllMovies,
  getMovieById,
  postMovies,
  updateMovie,
} from "../controllers/movieController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/post", verifyToken, postMovies);
router.get("/get", verifyToken, getAllMovies);
router.put("/update/:id", verifyToken, updateMovie);
router.delete("/delete/:id", verifyToken, deleteMovie);
router.get("/get/movie/:id", verifyToken, getMovieById);
export default router;
