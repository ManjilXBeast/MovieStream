import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/image.webp";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: currentUser.username || "",
    email: currentUser.email || "",
    avatar: currentUser.avatar || "",
    bio: currentUser.bio || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API PUT REQUEST WILL COME HERE

    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}

      <div className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-red-600">Update Profile</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
          {/* Avatar */}

          <div className="flex justify-center mb-8">
            <img
              src={formData.avatar || defaultAvatar}
              className="w-36 h-36 rounded-full object-cover border-4 border-red-600"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Avatar URL</label>

              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="Paste image URL"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Bio</label>

              <textarea
                name="bio"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write something about yourself..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="border border-gray-700 hover:border-red-600 hover:text-red-500 px-8 py-3 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
