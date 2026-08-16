import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaStar, FaCalendarAlt, FaLanguage } from "react-icons/fa";
import { MdHighQuality, MdOutlineDescription } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { getMovieDetails } from "../services/api";

const MovieDetail = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log("Fetching details for movie ID:", movieId);

        if (!movieId) {
          throw new Error("No movie ID provided");
        }

        const data = await getMovieDetails(movieId);
        console.log("Movie details:", data);

        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 text-red-500 min-h-screen flex items-center justify-center">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Movie not found</p>
      </div>
    );
  }

  const formatRuntime = (minutes) => {
    if (!minutes) return "N/A";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
  };

  const topCast = movie.credits?.cast?.slice(0, 5) || [];

  // Find official YouTube trailer first
  const trailer =
    movie.videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official === true,
    ) ||
    // Fallback to any YouTube trailer
    movie.videos?.results?.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* ================= BACKDROP ================= */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />

        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : "https://via.placeholder.com/1920x1080?text=No+Backdrop"
          }
          alt={movie.title}
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1920x1080?text=No+Backdrop";
          }}
        />

        {/* ================= MOVIE INFO ================= */}
        <div className="container mx-auto px-4 relative z-20 -mt-40">
          <div className="flex flex-col md:flex-row gap-8">
            {/* ================= POSTER ================= */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.title}
                className="w-full rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Poster";
                }}
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="w-full md:w-2/3 lg:w-3/4 py-8">
              {/* Title */}
              <div className="flex items-center mb-2 flex-wrap gap-3">
                <h1 className="text-4xl font-bold">{movie.title}</h1>

                {movie.release_date && (
                  <span className="bg-gray-700 px-2 py-1 rounded text-sm">
                    {movie.release_date.substring(0, 4)}
                  </span>
                )}
              </div>

              {/* Rating / HD / Runtime / Language */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* Rating */}
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <FaStar className="text-yellow-400 mr-1" />

                  <span>
                    {movie.vote_average
                      ? (movie.vote_average / 2).toFixed(1)
                      : "N/A"}
                  </span>
                </div>

                {/* Quality */}
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <MdHighQuality className="text-blue-400 mr-1" />
                  <span>HD</span>
                </div>

                {/* Runtime */}
                {movie.runtime && (
                  <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                    <BiTime className="mr-1" />
                    <span>{formatRuntime(movie.runtime)}</span>
                  </div>
                )}

                {/* Language */}
                {movie.original_language && (
                  <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                    <FaLanguage className="mr-1" />

                    <span className="uppercase">{movie.original_language}</span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MdOutlineDescription className="mr-2" />
                  Overview
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {movie.overview || "No overview available."}
                </p>
              </div>

              {/* Genres */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Genres</h3>

                <div className="flex flex-wrap gap-2">
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Watch Trailer Button */}
              {trailer && (
                <button
                  onClick={() =>
                    document.getElementById("movie-trailer")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-bold text-lg flex items-center"
                >
                  <FaPlay className="mr-2" />
                  Watch Trailer
                </button>
              )}

              {!trailer && (
                <p className="text-gray-400">Trailer not available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRAILER ================= */}
      {trailer && (
        <div id="movie-trailer" className="container mx-auto px-4 pt-12">
          <h2 className="text-3xl font-bold mb-6">{movie.title} Trailer</h2>

          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ================= CAST & DETAILS ================= */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ================= CAST ================= */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Cast</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {topCast.map((person) => (
                <div key={person.id} className="text-center">
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={person.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200x300?text=No+Image";
                    }}
                  />

                  <h4 className="font-bold">{person.name}</h4>

                  <p className="text-sm text-gray-400">{person.character}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MOVIE DETAILS ================= */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Details</h2>

            <div className="space-y-4">
              {/* Release Date */}
              {movie.release_date && (
                <div>
                  <h3 className="font-semibold flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    Release Date
                  </h3>

                  <p className="text-gray-300">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}

              {/* Status */}
              {movie.status && (
                <div>
                  <h3 className="font-semibold">Status</h3>

                  <p className="text-gray-300">{movie.status}</p>
                </div>
              )}

              {/* Budget */}
              {movie.budget > 0 && (
                <div>
                  <h3 className="font-semibold">Budget</h3>

                  <p className="text-gray-300">
                    ${movie.budget.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Revenue */}
              {movie.revenue > 0 && (
                <div>
                  <h3 className="font-semibold">Revenue</h3>

                  <p className="text-gray-300">
                    ${movie.revenue.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Production Companies */}
              {movie.production_companies?.length > 0 && (
                <div>
                  <h3 className="font-semibold">Production Companies</h3>

                  <div className="space-y-2">
                    {movie.production_companies.map((company) => (
                      <p key={company.id} className="text-gray-300">
                        {company.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
