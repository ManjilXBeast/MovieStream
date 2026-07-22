import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/image.webp";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate;
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-red-600">My Profile</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Profile Card */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src={currentUser.avatar || defaultAvatar}
                alt={currentUser.username}
                className="w-40 h-40 rounded-full object-cover border-4 border-red-600"
              />

              <button className="absolute bottom-1 right-1 bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
                ✎
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold"></h2>
              <p className="text-gray-400">{currentUser.username}</p>
              <p className="text-gray-500 mt-1">{currentUser.email}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition">
                  Edit Profile
                </button>

                <button className="border border-gray-700 hover:border-red-600 hover:text-red-500 px-6 py-2 rounded-lg transition">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <h3 className="text-4xl font-bold text-red-500">128</h3>
            <p className="text-gray-400 mt-2">Movies Watched</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <h3 className="text-4xl font-bold text-red-500">42</h3>
            <p className="text-gray-400 mt-2">Favorites</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <h3 className="text-4xl font-bold text-red-500">12</h3>
            <p className="text-gray-400 mt-2">Watchlists</p>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 mt-10 p-8">
          <h3 className="text-2xl font-semibold mb-6">Account Information</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                value={currentUser.username}
                readOnly
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Username</label>
              <input
                type="text"
                value={currentUser.username}
                readOnly
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                value={currentUser.email}
                readOnly
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Member Since</label>
              <input
                type="text"
                value="January 2026"
                readOnly
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>
          </div>
        </div>

        {/* Favorite Genres */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 mt-10 p-8">
          <h3 className="text-2xl font-semibold mb-6">Favorite Genres</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Action",
              "Adventure",
              "Sci-Fi",
              "Thriller",
              "Comedy",
              "Drama",
            ].map((genre) => (
              <span
                key={genre}
                className="bg-red-600/20 text-red-500 border border-red-600 px-4 py-2 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
