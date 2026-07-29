import Movie from "../models/Movies.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      message: "List of all movies",
      data: movies,
    });
  } catch (error) {
    console.log("Error fetching movies:", error);
  }
};

export const postMovies = async (req, res) => {
  try {
    const movieData = await Movie.create(req.body);
    res.status(201).json({
      message: "Movie added successfully",
      data: movieData,
    });
  } catch (error) {
    console.log("Error adding movie:", error);
  }
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      res.status(200).json({
        message: `Details of movie with ID: ${id}`,
        data: movie,
      });
    } else {
      res.status(404).json({
        message: `Movie with ID: ${id} not found`,
      });
    }
  } catch (error) {
    console.log("Error fetching movie by ID:", error);
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (movie) {
      res.status(200).json({
        message: `Movie with ID: ${id} deleted successfully`,
      });
    } else {
      res.status(404).json({
        message: `Movie with ID: ${id} not found`,
      });
    }
  } catch (error) {
    console.log("Error deleting movie:", error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({
        message: `Movie with ID: ${req.params.id} not found`,
      });
    }

    const allowedUpdates = [
      "title",
      "description",
      "image",
      "genre",
      "duration",
      "releaseYear",
      "rating",
      "videoUrl",
      "trailerUrl",
      "cast",
      "director",
      "language",
      "isAvailable",
    ];

    const updates = Object.keys(req.body);
    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No updates provided",
      });
    }

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).json({
        success: false,
        message: "Invalid updates!",
      });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      message: `Movie with ID: ${req.params.id} updated successfully`,
      data: updatedMovie,
    });
  } catch (error) {
    console.log("Error updating movie:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while updating movie",
      error: error.message,
    });
  }
};
