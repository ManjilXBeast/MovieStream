import { useEffect, useState } from "react";
import {
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getPopularMovies,
  getSciFiMovies,
  getTopRatedMovies,
} from "../services/api";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    horror: [],
    sciFi: [],
    comedy: [],
    action: [],
  });

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [popular, topRated, horror, sciFi, comedy, action] =
          await Promise.all([
            getPopularMovies(),
            getTopRatedMovies(),
            getHorrorMovies(),
            getSciFiMovies(),
            getComedyMovies(),
            getActionMovies(),
          ]);

        setMovies({
          popular,
          topRated,
          horror,
          sciFi,
          comedy,
          action,
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[45vh] flex items-center justify-center bg-gradient-to-r from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-red-600">Movie</span> Collection
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the latest blockbusters, timeless classics, thrilling
            action, spine-chilling horror, hilarious comedies, and the best
            science fiction movies.
          </p>
        </div>
      </div>

      {/* Movie Sections */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        <MovieCard
          title="🔥 Popular Movies"
          movies={movies.popular.slice(0, 8)}
        />

        <MovieCard
          title="⭐ Top Rated Movies"
          movies={movies.topRated.slice(0, 8)}
        />

        <MovieCard
          title="👻 Horror Movies"
          movies={movies.horror.slice(0, 8)}
        />

        <MovieCard title="🚀 Sci-Fi Movies" movies={movies.sciFi.slice(0, 8)} />

        <MovieCard
          title="😂 Comedy Movies"
          movies={movies.comedy.slice(0, 8)}
        />

        <MovieCard
          title="💥 Action Movies"
          movies={movies.action.slice(0, 8)}
        />
      </div>
    </div>
  );
};

export default Movies;
