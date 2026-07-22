import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(response.data.data);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      {/* Sign In Card */}
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600">MovieFlix</h1>
          <p className="text-gray-400 mt-2">Sign in to continue watching</p>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-2">Username</label>

            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-red-500 hover:text-red-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-red-600" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-red-500 hover:text-red-400"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging In.." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 hover:text-red-400 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
