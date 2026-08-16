import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };
  return (
    <div className="px-6 py-8 bg-black text-white">
      {/* Section Title */}
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            onClick={() => handleMovieClick(movie.id)}
          >
            {/* Poster */}
            <div className="overflow-hidden">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.title}
                className="w-full h-[340px] object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Movie Info */}
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate mb-2">
                {movie.title}
              </h2>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="bg-red-600 px-2 py-1 rounded-md text-white text-xs">
                  {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
                </span>

                {movie.vote_average && (
                  <span className="text-yellow-400 font-semibold">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
