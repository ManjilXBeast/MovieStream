import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-black/70 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-red-600 hover:text-red-500 transition"
      >
        MovieFlix
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-gray-300">
        <Link to="/" className="hover:text-red-500 transition duration-300">
          Home
        </Link>

        <Link
          to="/movies"
          className="hover:text-red-500 transition duration-300"
        >
          Movies
        </Link>

        <Link
          to="/tvshows"
          className="hover:text-red-500 transition duration-300"
        >
          TV Shows
        </Link>

        <Link
          to="/mylist"
          className="hover:text-red-500 transition duration-300"
        >
          My List
        </Link>
      </div>

      {/* Login/Register Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="px-5 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 shadow-lg shadow-red-600/30"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
