import Movies from "../models/Movies";

//Postmovie
export const PostMovie = async (req, res) => {
  try {
    const Movie = await Movies.create(req.body);
    res.status(201).json({ messae: "MOvie Added Successfully", data: Movies });
  } catch (error) {}
};

// //post movie
// export const postMovie = (req, res) => {
//   res.status(201).json({ message: "Movie posted successfully!" });
// };

// //get movie
// export const getMovie = (req, res) => {
//   res.status(200).json({ message: "Movie retrieved successfully!" });
// };

// //update movie
// export const updateMovie = (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({ message: `Movie ${id} updated successfully!` });
// };

// //delete movie
// export const deleteMovie = (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({ message: `Movie ${id} deleted successfully!` });
// };
