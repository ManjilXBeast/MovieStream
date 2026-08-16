import { Play, Star, Plus, ChevronRight } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Dune Part Two",
    genre: "Sci-Fi",
    rating: "8.9",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "The Batman",
    genre: "Action",
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Adventure",
    rating: "9.0",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "John Wick",
    genre: "Action",
    rating: "8.7",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[6px] text-red-500 mb-3">
            Featured Movie
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-6">DUNE</h1>

          <p className="text-gray-300 max-w-xl leading-8 mb-8">
            Paul Atreides unites with the Fremen while seeking revenge against
            those who destroyed his family.
          </p>

          <div className="flex gap-5">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition">
              <Play size={20} />
              Watch Now
            </button>

            <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl">
              My List
            </button>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Trending Movies</h2>

          <button className="flex items-center text-red-500">
            View All
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-[#171717] rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(255,0,0,0.3)]"
            >
              <div className="overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between">
                  <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                    {movie.genre}
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={16} fill="gold" color="gold" />
                    {movie.rating}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-5">{movie.title}</h3>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-red-600 py-3 rounded-xl hover:bg-red-700 transition">
                    Watch
                  </button>

                  <button className="w-14 bg-white/10 rounded-xl hover:bg-white/20">
                    <Plus className="mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-purple-700 p-10 flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">Unlimited Movies</h2>

            <p className="text-lg text-white/80 max-w-lg">
              Discover thousands of movies, TV shows and originals with stunning
              quality and personalized recommendations.
            </p>
          </div>

          <button className="mt-8 lg:mt-0 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Start Watching
          </button>
        </div>
      </section>

      {/* FOOTER */}
    </div>
  );
}
